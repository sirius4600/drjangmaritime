// 히어로 장면의 배경: 노을 하늘, 바다(수면 위에 VTS 레이더 화면을 그대로 그림), VTS 레이더 타워, 먼 항만(산·크레인·불빛).
import * as THREE from "three";

export const MAX_TARGETS = 12;

// 하늘과 바다가 같은 지평선 색을 쓰도록 GLSL 함수를 공유한다.
const SKY_GLSL = `
  uniform vec3 uSunDir;
  vec3 skyColor(vec3 d){
    float h = d.y;
    vec3 top = vec3(0.016, 0.043, 0.098);
    vec3 mid = vec3(0.058, 0.149, 0.271);
    vec3 warm = vec3(1.0, 0.56, 0.30);
    vec3 dxz = normalize(vec3(d.x, 0.0, d.z) + 1e-5);
    float toward = pow(max(dot(dxz, normalize(vec3(uSunDir.x, 0.0, uSunDir.z))), 0.0), 2.5);
    vec3 horizon = mix(vec3(0.20, 0.30, 0.42), warm, 0.25 + 0.7 * toward);
    vec3 col = mix(horizon, mid, smoothstep(-0.02, 0.16, h));
    col = mix(col, top, smoothstep(0.16, 0.55, h));
    float sd = max(dot(normalize(d), normalize(uSunDir)), 0.0);
    col += vec3(1.0, 0.62, 0.35) * (pow(sd, 900.0) * 3.0 + pow(sd, 40.0) * 0.35);
    return col;
  }
`;

export function createSky(sunDir: THREE.Vector3) {
  const m = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: { uSunDir: { value: sunDir } },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position = p.xyww; }`,
    fragmentShader: `varying vec3 vDir; ${SKY_GLSL}
      float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,37.719)))*43758.5453); }
      void main(){
        vec3 col = skyColor(vDir);
        vec3 q = floor(vDir * 260.0);
        float s = step(0.9975, hash(q)) * smoothstep(0.12, 0.45, vDir.y);
        col += vec3(s) * 0.9;
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(150, 32, 16), m);
  sky.renderOrder = -10;
  sky.frustumCulled = false;
  return sky;
}

export type SeaUniforms = {
  uTime: { value: number };
  uSweep: { value: number };
  uRadarC: { value: THREE.Vector2 };
  uRadarR: { value: number };
  uTargets: { value: THREE.Vector4[] }; // x, z, 고리 반지름, 밝기
  uHeading: { value: THREE.Vector2[] }; // 진행 방향(단위 벡터)
  uTargetN: { value: number };
};

export function createSea(sunDir: THREE.Vector3, mobile: boolean, radarC: THREE.Vector2, radarR: number) {
  const seg = mobile ? 90 : 180;
  const geo = new THREE.PlaneGeometry(220, 160, seg, Math.round(seg * 0.7));
  geo.rotateX(-Math.PI / 2);
  const uniforms: SeaUniforms & { uSunDir: { value: THREE.Vector3 } } = {
    uTime: { value: 0 },
    uSweep: { value: 0 },
    uRadarC: { value: radarC },
    uRadarR: { value: radarR },
    uTargets: { value: Array.from({ length: MAX_TARGETS }, () => new THREE.Vector4()) },
    uHeading: { value: Array.from({ length: MAX_TARGETS }, () => new THREE.Vector2(1, 0)) },
    uTargetN: { value: 0 },
    uSunDir: { value: sunDir },
  };
  const m = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `
      uniform float uTime; varying vec3 vPos; varying float vH;
      float wave(vec2 p){
        return sin(p.x*0.42 + uTime*0.75)*0.09 + sin(p.y*0.63 + uTime*1.05)*0.07
             + sin((p.x+p.y)*1.25 + uTime*1.5)*0.035 + sin((p.x-p.y*0.7)*2.3 + uTime*2.1)*0.015;
      }
      void main(){
        vec3 p = position; float fall = smoothstep(70.0, 25.0, length(p.xz));
        p.y += wave(p.xz) * fall; vH = p.y;
        vPos = (modelMatrix*vec4(p,1.0)).xyz;
        gl_Position = projectionMatrix*viewMatrix*vec4(vPos,1.0);
      }`,
    fragmentShader: `
      #define MAXT ${MAX_TARGETS}
      uniform float uTime; uniform float uSweep; uniform vec2 uRadarC; uniform float uRadarR;
      uniform vec4 uTargets[MAXT]; uniform vec2 uHeading[MAXT]; uniform int uTargetN;
      varying vec3 vPos; varying float vH;
      ${SKY_GLSL}
      float lineAA(float d, float w){ float f = fwidth(d); return 1.0 - smoothstep(w, w + f*1.5, d); }
      void main(){
        vec3 n = normalize(cross(dFdx(vPos), dFdy(vPos)));
        vec3 v = normalize(cameraPosition - vPos);
        float dist = length(vPos.xz - cameraPosition.xz);
        // 물빛
        vec3 deep = vec3(0.012, 0.06, 0.12), mid = vec3(0.03, 0.22, 0.36);
        vec3 col = mix(deep, mid, smoothstep(-0.12, 0.14, vH));
        // 하늘 반사 + 노을 윤슬
        vec3 r = reflect(-v, n); r.y = abs(r.y);
        float fres = 0.04 + 0.96 * pow(1.0 - max(dot(n, v), 0.0), 5.0);
        col = mix(col, skyColor(r), clamp(fres, 0.0, 0.85));
        vec3 sd = normalize(uSunDir);
        float spec = pow(max(dot(reflect(-sd, n), v), 0.0), 180.0);
        col += vec3(1.0, 0.65, 0.38) * spec * 2.2;

        // VTS 레이더 화면 (PPI)
        vec2 d = vPos.xz - uRadarC; float rr = length(d);
        vec3 rc = vec3(0.24, 0.95, 0.77);
        float rad = 0.0;
        if (rr < uRadarR * 1.02) {
          float a = atan(d.y, d.x);
          float behind = mod(uSweep - a, 6.2831853);
          float trail = exp(-behind * 1.6) * 0.55;
          float edge = lineAA(behind * rr, 0.05) * 1.4;
          float step_ = uRadarR / 4.0;
          float ringD = abs(fract(rr / step_ + 0.5) - 0.5) * step_;
          float rings = lineAA(ringD, 0.022) * 0.32;
          float ang = abs(fract(a / 0.5235988 + 0.5) - 0.5) * 0.5235988 * rr;
          float spokes = lineAA(ang, 0.02) * 0.22 * smoothstep(0.6, 2.0, rr);
          float outer = lineAA(abs(rr - uRadarR), 0.04) * 0.7;
          float tick = lineAA(abs(fract(a / 0.0872665 + 0.5) - 0.5) * 0.0872665 * rr, 0.025) * step(uRadarR - 0.45, rr) * step(rr, uRadarR) * 0.8;
          float fadeIn = smoothstep(0.4, 1.4, rr);
          rad = (trail + edge + rings + spokes) * fadeIn + outer + tick;
          rad *= 1.0 - smoothstep(uRadarR, uRadarR * 1.02, rr) * 0.0;
        }
        // 선박 표적: 고리 + 진행 방향선 + 지난 항적 점
        for (int i = 0; i < MAXT; i++) {
          if (i >= uTargetN) break;
          vec4 t = uTargets[i]; vec2 h = uHeading[i];
          vec2 q = vPos.xz - t.xy; float g = 0.45 + t.w * 1.6;
          float ring = lineAA(abs(length(q) - t.z), 0.05);
          float along = dot(q, h); float across = abs(dot(q, vec2(-h.y, h.x)));
          float vec_ = lineAA(across, 0.035) * step(t.z, along) * step(along, t.z + 2.4);
          float dots = 0.0;
          for (int k = 1; k <= 5; k++) {
            vec2 c = t.xy - h * (t.z + float(k) * 1.15);
            dots += lineAA(length(vPos.xz - c), 0.09) * (1.0 - float(k) * 0.16);
          }
          rad += (ring * 1.2 + vec_ * 0.9 + dots * 0.7) * g;
        }
        col += rc * rad * 0.42;

        // 멀리는 지평선 하늘색으로
        vec3 hz = skyColor(normalize(vec3(-v.x, 0.004, -v.z)));
        col = mix(col, hz, smoothstep(22.0, 95.0, dist));
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const sea = new THREE.Mesh(geo, m);
  sea.position.y = -0.32;
  sea.receiveShadow = false;
  return { sea, uniforms };
}

// VTS 레이더 타워: 바위섬 → 콘크리트 기단 → 흰 타워 → 장비실 → 회랑 → 회전 안테나(개방형 도파관 배열)
export function createRadarTower() {
  const g = new THREE.Group();
  const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(1.5, 1), new THREE.MeshStandardMaterial({ color: 0x2a323a, roughness: 0.95, flatShading: true }));
  rock.scale.set(1.25, 0.45, 1.05);
  rock.position.y = -0.35;
  g.add(rock);
  const concrete = new THREE.MeshStandardMaterial({ color: 0xbcc3c9, roughness: 0.85 });
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.95, 0.35, 28), concrete);
  base.position.y = 0.12;
  g.add(base);
  const whiteM = new THREE.MeshStandardMaterial({ color: 0xf2f5f7, roughness: 0.45 });
  const tower = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.52, 3.6, 28), whiteM);
  tower.position.y = 0.3 + 1.8;
  tower.castShadow = true;
  g.add(tower);
  // 빨간 띠 두 줄 (타워 반지름은 위로 갈수록 줄어든다)
  const redM = new THREE.MeshStandardMaterial({ color: 0xc8302a, roughness: 0.5 });
  const towerR = (y: number) => 0.52 - (0.18 * (y - 0.3)) / 3.6;
  [1.2, 2.6].forEach((y) => {
    const b = new THREE.Mesh(new THREE.CylinderGeometry(towerR(y + 0.175) + 0.008, towerR(y - 0.175) + 0.008, 0.35, 28), redM);
    b.position.y = y;
    g.add(b);
  });
  // 작은 창 몇 개
  for (let i = 0; i < 3; i++) {
    const w = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.16), new THREE.MeshBasicMaterial({ color: 0xffe3a3 }));
    const y = 0.9 + i * 0.95;
    const r = towerR(y) + 0.012;
    w.position.set(0, y, r);
    g.add(w);
  }
  // 장비실(관제 장비 하우스) + 유리창 띠
  const houseY = 3.9;
  const house = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.5, 0.55, 8), whiteM);
  house.position.y = houseY + 0.27;
  house.castShadow = true;
  g.add(house);
  const glass = new THREE.Mesh(
    new THREE.CylinderGeometry(0.6, 0.56, 0.2, 8, 1, true),
    new THREE.MeshStandardMaterial({ color: 0x0d2a44, emissive: 0x5fd4ff, emissiveIntensity: 0.55, roughness: 0.15, metalness: 0.3 }),
  );
  glass.position.y = houseY + 0.33;
  g.add(glass);
  const roof = new THREE.Mesh(new THREE.CylinderGeometry(0.78, 0.66, 0.08, 8), new THREE.MeshStandardMaterial({ color: 0x2b3a48, roughness: 0.6 }));
  roof.position.y = houseY + 0.59;
  g.add(roof);
  // 회랑 난간
  const railM = new THREE.MeshStandardMaterial({ color: 0xe0e5ea, roughness: 0.4, metalness: 0.3 });
  const rail = new THREE.Mesh(new THREE.TorusGeometry(0.76, 0.012, 6, 40), railM);
  rail.rotation.x = Math.PI / 2;
  rail.position.y = houseY + 0.82;
  g.add(rail);
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.22, 4), railM);
    p.position.set(Math.cos(a) * 0.76, houseY + 0.72, Math.sin(a) * 0.76);
    g.add(p);
  }
  // 안테나 받침 + 기어박스
  const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.32, 16), new THREE.MeshStandardMaterial({ color: 0xdfe4e8, roughness: 0.4 }));
  ped.position.y = houseY + 0.79;
  g.add(ped);
  const head = new THREE.Group();
  head.position.y = houseY + 1.02;
  g.add(head);
  const gear = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.2, 0.3), new THREE.MeshStandardMaterial({ color: 0xe9edf1, roughness: 0.35 }));
  head.add(gear);
  // 개방형 도파관 안테나 (길쭉한 날개, 앞면은 짙은 슬롯 면)
  const arrayLen = 3.4;
  const arm = new THREE.Mesh(new THREE.BoxGeometry(arrayLen, 0.26, 0.16), new THREE.MeshStandardMaterial({ color: 0xf5f7f9, roughness: 0.3 }));
  arm.position.set(0, 0.2, 0.02);
  arm.castShadow = true;
  head.add(arm);
  const face = new THREE.Mesh(new THREE.PlaneGeometry(arrayLen * 0.97, 0.16), new THREE.MeshStandardMaterial({ color: 0x31404d, roughness: 0.5 }));
  face.position.set(0, 0.2, 0.105);
  head.add(face);
  // 슬롯 무늬
  const slotM = new THREE.MeshBasicMaterial({ color: 0x9aa7b2 });
  for (let i = 0; i < 26; i++) {
    const s = new THREE.Mesh(new THREE.PlaneGeometry(0.035, 0.1), slotM);
    s.position.set(-arrayLen / 2 + 0.12 + i * ((arrayLen - 0.24) / 25), 0.2, 0.107);
    s.rotation.z = i % 2 ? 0.35 : -0.35;
    head.add(s);
  }
  [-1, 1].forEach((sd) => {
    const cap = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.3, 0.2), new THREE.MeshStandardMaterial({ color: 0xc8302a, roughness: 0.4 }));
    cap.position.set(sd * (arrayLen / 2 + 0.02), 0.2, 0.02);
    head.add(cap);
  });
  // 레이돔(보조 레이더)과 휩 안테나
  const dome = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), whiteM);
  dome.position.set(0.45, houseY + 0.63, -0.3);
  g.add(dome);
  [[-0.5, 0.25], [-0.42, -0.38]].forEach(([x, z]) => {
    const w = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.012, 0.9, 4), railM);
    w.position.set(x, houseY + 1.05, z);
    g.add(w);
  });
  // 항공 장애등
  const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 10), new THREE.MeshBasicMaterial({ color: 0xff3030 }));
  beacon.position.set(-0.5, houseY + 1.52, 0.25);
  g.add(beacon);
  const beaconLight = new THREE.PointLight(0xff3030, 0, 3);
  beaconLight.position.copy(beacon.position);
  g.add(beaconLight);
  return { group: g, head, beacon, beaconLight, height: houseY + 1.3 };
}

// 먼 항만: 산 능선, 컨테이너 크레인 실루엣, 도시 불빛
export function createHarbor(mobile: boolean) {
  const g = new THREE.Group();
  // 산 능선 (부산의 산들)
  const ridge = (z: number, h: number, color: number, seed: number) => {
    const s = new THREE.Shape();
    const W = 180;
    s.moveTo(-W / 2, 0);
    let rnd = seed;
    const rand = () => ((rnd = (rnd * 9301 + 49297) % 233280) / 233280);
    for (let x = -W / 2; x <= W / 2; x += 4) {
      const y = h * (0.45 + 0.35 * Math.sin(x * 0.07 + seed) + 0.2 * rand());
      s.lineTo(x, y);
    }
    s.lineTo(W / 2, 0);
    s.closePath();
    const m = new THREE.Mesh(new THREE.ShapeGeometry(s), new THREE.MeshBasicMaterial({ color, fog: true }));
    m.position.set(0, -0.4, z);
    return m;
  };
  g.add(ridge(-78, 9, 0x13283d, 7));
  g.add(ridge(-62, 6, 0x0e2132, 13));
  // 부두 선
  const quay = new THREE.Mesh(new THREE.BoxGeometry(70, 0.8, 2), new THREE.MeshStandardMaterial({ color: 0x1b2a38, roughness: 0.9 }));
  quay.position.set(14, 0, -64);
  g.add(quay);
  // 컨테이너 크레인 (STS)
  const craneM = new THREE.MeshStandardMaterial({ color: 0x23394e, roughness: 0.7 });
  const lights: THREE.Mesh[] = [];
  const nCranes = mobile ? 4 : 7;
  for (let i = 0; i < nCranes; i++) {
    const c = new THREE.Group();
    const legH = 5.5;
    [[-1.1, -0.9], [1.1, -0.9], [-1.1, 0.9], [1.1, 0.9]].forEach(([x, z]) => {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.25, legH, 0.25), craneM);
      leg.position.set(x, legH / 2, z);
      c.add(leg);
    });
    const beam = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.45, 9), craneM);
    beam.position.set(0, legH + 0.2, 1.6);
    c.add(beam);
    const apex = new THREE.Mesh(new THREE.BoxGeometry(0.25, 2.2, 0.25), craneM);
    apex.position.set(0, legH + 1.3, -0.6);
    c.add(apex);
    const tie = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 5.2), craneM);
    tie.position.set(0, legH + 1.4, 2.0);
    tie.rotation.x = 0.33;
    c.add(tie);
    const light = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff4040, fog: false }));
    light.position.set(0, legH + 2.45, -0.6);
    c.add(light);
    lights.push(light);
    const flood = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), new THREE.MeshBasicMaterial({ color: 0xfff0c0, fog: false }));
    flood.position.set(0, legH + 0.05, 4.5);
    c.add(flood);
    c.position.set(0 + i * 5.6, 0.2, -63);
    c.scale.setScalar(0.8);
    c.rotation.y = 0.05;
    g.add(c);
  }
  // 도시 불빛
  const n = mobile ? 220 : 520;
  const pos = new Float32Array(n * 3);
  const colr = new Float32Array(n * 3);
  const warm = new THREE.Color(0xffd28a), cool = new THREE.Color(0xbfe6ff);
  for (let i = 0; i < n; i++) {
    const x = (Math.random() - 0.5) * 150;
    const z = -55 - Math.random() * 12;
    pos.set([x, -0.2 + Math.random() * Math.random() * 3.5, z], i * 3);
    const c = Math.random() < 0.75 ? warm : cool;
    colr.set([c.r, c.g, c.b], i * 3);
  }
  const pg = new THREE.BufferGeometry();
  pg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  pg.setAttribute("color", new THREE.BufferAttribute(colr, 3));
  const city = new THREE.Points(pg, new THREE.PointsMaterial({ size: 2.2, sizeAttenuation: false, vertexColors: true, transparent: true, opacity: 0.85, fog: false }));
  g.add(city);
  return { group: g, craneLights: lights };
}

// 부두 소품: 계선주(볼라드), 구명환
export function createDockProps() {
  const g = new THREE.Group();
  const bollardM = new THREE.MeshStandardMaterial({ color: 0x2b2f36, roughness: 0.5, metalness: 0.4 });
  [[-0.95, -0.5], [0.95, -0.55]].forEach(([x, z]) => {
    const b = new THREE.Group();
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.22, 14), bollardM);
    post.position.y = 0.11;
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.05, 14), bollardM);
    cap.position.y = 0.24;
    b.add(post, cap);
    b.position.set(x, 0.15, z);
    g.add(b);
  });
  // 구명환 (주황·흰 줄무늬) — 해양안전의 상징
  const ring = new THREE.Group();
  for (let i = 0; i < 8; i++) {
    const seg = new THREE.Mesh(
      new THREE.TorusGeometry(0.22, 0.065, 10, 8, Math.PI / 4),
      new THREE.MeshStandardMaterial({ color: i % 2 ? 0xffffff : 0xff6a13, roughness: 0.45 }),
    );
    seg.rotation.z = (i * Math.PI) / 4;
    ring.add(seg);
  }
  const stand = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.62, 0.05), new THREE.MeshStandardMaterial({ color: 0xdfe4e8 }));
  stand.position.set(0, 0.31, -0.03);
  const holder = new THREE.Group();
  holder.add(stand);
  ring.position.set(0, 0.5, 0.04);
  holder.add(ring);
  holder.position.set(-0.85, 0.15, 0.55);
  holder.rotation.y = 0.5;
  g.add(holder);
  return g;
}
