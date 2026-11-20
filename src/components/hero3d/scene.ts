// 첫 화면(히어로) 3D 장면.
// 해 질 녘 바다 위 둥근 부두에 '머리 큰' 장은규 교수 캐릭터가 서 있고, 뒤로 VTS 레이더 마스트가 돌며,
// 레이더 원 안에서 선박들이 표적 고리를 달고 지나간다. 마우스를 따라 고개를 돌리고, 누르면 손을 흔들며 뛴다.
// 화면 밖이거나 탭이 숨으면 그리기를 멈춘다. 모든 도형은 코드로 만든다(외부 모델·텍스처 파일 없음).
import * as THREE from "three";

export type HeroScene = { dispose: () => void; wave: () => void };

type Opts = {
  mobile: boolean;
  reducedMotion: boolean;
  onCharacterScreenPos?: (x: number, y: number) => void;
};

const C = {
  skin: 0xf0c4a0,
  blush: 0xff9aa2,
  hair: 0x16130f,
  suit: 0x3e4b63,
  suitDark: 0x2f3a4f,
  shirt: 0xcfe3f7,
  tie: 0x16244a,
  tieStripe: 0xf2c230,
  shoe: 0x1a1a1f,
  line: 0x2a1c16,
  mouth: 0xb5524b,
  pin: 0x3fa9f5,
  accent: 0x2ec4b6,
  deck: 0xe9eef2,
  rim: 0x0f9aa4,
};

function tieTexture() {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = "#16244a";
  g.fillRect(0, 0, 64, 256);
  g.strokeStyle = "#f2c230";
  g.lineWidth = 7;
  for (let y = -64; y < 320; y += 44) {
    g.beginPath();
    g.moveTo(-10, y + 40);
    g.lineTo(74, y);
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// 장은규 교수 캐릭터 (머리 큰 2.5등신)
function createProfessor(quality: number) {
  const seg = (n: number) => Math.max(8, Math.round(n * quality));
  const root = new THREE.Group();
  const body = new THREE.Group(); // 통통 튀는 몸 전체
  root.add(body);

  const std = (color: number, rough = 0.6) => new THREE.MeshStandardMaterial({ color, roughness: rough });
  const skinM = new THREE.MeshPhysicalMaterial({ color: C.skin, roughness: 0.55, clearcoat: 0.25, clearcoatRoughness: 0.5 });
  const suitM = new THREE.MeshPhysicalMaterial({ color: C.suit, roughness: 0.62, sheen: 0.6, sheenColor: new THREE.Color(0x8fa3c4) });
  const suitDarkM = std(C.suitDark, 0.7);
  const hairM = new THREE.MeshPhysicalMaterial({ color: C.hair, roughness: 0.4, clearcoat: 0.6, clearcoatRoughness: 0.35 });
  const lineM = std(C.line, 0.5);
  const shirtM = std(C.shirt, 0.55);
  const shoeM = new THREE.MeshPhysicalMaterial({ color: C.shoe, roughness: 0.25, clearcoat: 0.8 });

  const add = (parent: THREE.Object3D, geo: THREE.BufferGeometry, mat: THREE.Material, x = 0, y = 0, z = 0) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    parent.add(m);
    return m;
  };

  // 구두
  [-1, 1].forEach((s) => {
    const g = new THREE.SphereGeometry(0.13, seg(16), seg(12));
    g.scale(1, 0.55, 1.5);
    add(body, g, shoeM, s * 0.14, 0.07, 0.05);
  });
  // 다리
  [-1, 1].forEach((s) => add(body, new THREE.CylinderGeometry(0.11, 0.1, 0.42, seg(16)), suitM, s * 0.14, 0.32, 0));

  // 몸통(재킷)
  const torsoProfile = [
    [0.0, 0.0], [0.33, 0.0], [0.37, 0.12], [0.37, 0.42], [0.35, 0.56], [0.28, 0.66], [0.12, 0.72], [0.0, 0.73],
  ].map(([x, y]) => new THREE.Vector2(x, y));
  const torsoGeo = new THREE.LatheGeometry(torsoProfile, seg(32));
  torsoGeo.scale(1.08, 1, 0.82);
  add(body, torsoGeo, suitM, 0, 0.5, 0);

  // 셔츠 V, 넥타이, 옷깃
  const vShape = new THREE.Shape();
  vShape.moveTo(-0.17, 0.7);
  vShape.lineTo(0.17, 0.7);
  vShape.lineTo(0, 0.2);
  vShape.closePath();
  add(body, new THREE.ShapeGeometry(vShape), shirtM, 0, 0.5, 0.312);
  const tieM = new THREE.MeshStandardMaterial({ map: tieTexture(), roughness: 0.5 });
  const tieShape = new THREE.Shape();
  tieShape.moveTo(-0.035, 0.66);
  tieShape.lineTo(0.035, 0.66);
  tieShape.lineTo(0.06, 0.3);
  tieShape.lineTo(0, 0.22);
  tieShape.lineTo(-0.06, 0.3);
  tieShape.closePath();
  const tieGeo = new THREE.ShapeGeometry(tieShape);
  const uv = tieGeo.attributes.uv as THREE.BufferAttribute;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, (uv.getX(i) + 0.06) / 0.12, (uv.getY(i) - 0.22) / 0.44);
  add(body, tieGeo, tieM, 0, 0.5, 0.318);
  [-1, 1].forEach((s) => {
    const lap = new THREE.Shape();
    lap.moveTo(s * 0.17, 0.7);
    lap.lineTo(s * 0.26, 0.62);
    lap.lineTo(s * 0.1, 0.3);
    lap.lineTo(0, 0.18);
    lap.closePath();
    const l = add(body, new THREE.ShapeGeometry(lap), suitDarkM, 0, 0.5, 0.322);
    (l.material as THREE.Material).side = THREE.DoubleSide;
  });
  // 옷깃 배지
  const pin = add(body, new THREE.CylinderGeometry(0.025, 0.025, 0.01, 16), new THREE.MeshStandardMaterial({ color: C.pin, metalness: 0.6, roughness: 0.3 }), -0.19, 1.0, 0.33);
  pin.rotation.x = Math.PI / 2 - 0.25;
  // 단추
  [0.68, 0.84].forEach((y) => add(body, new THREE.SphereGeometry(0.018, 8, 8), lineM, 0.07, y, 0.31));

  // 팔: 어깨에 축이 있는 그룹
  const arms: THREE.Group[] = [];
  [-1, 1].forEach((s) => {
    const pivot = new THREE.Group();
    pivot.position.set(s * 0.37, 1.1, 0);
    const sleeve = new THREE.CapsuleGeometry(0.085, 0.36, 6, seg(12));
    add(pivot, sleeve, suitM, 0, -0.24, 0);
    add(pivot, new THREE.SphereGeometry(0.075, seg(12), seg(10)), skinM, 0, -0.5, 0);
    pivot.rotation.z = s * 0.12;
    body.add(pivot);
    arms.push(pivot);
  });

  // 목
  add(body, new THREE.CylinderGeometry(0.1, 0.11, 0.12, seg(14)), skinM, 0, 1.25, 0);

  // 머리 (큰 머리)
  const head = new THREE.Group();
  head.position.set(0, 1.86, 0);
  body.add(head);
  const R = 0.6;
  const headGeo = new THREE.SphereGeometry(R, seg(40), seg(32));
  headGeo.scale(1.02, 0.98, 0.94);
  add(head, headGeo, skinM);
  // 귀
  [-1, 1].forEach((s) => {
    const g = new THREE.SphereGeometry(0.11, 12, 12);
    g.scale(0.5, 1, 0.8);
    add(head, g, skinM, s * 0.6, -0.02, -0.02);
  });
  // 머리카락: 위·뒤를 덮는 덮개 + 앞머리
  const capGeo = new THREE.SphereGeometry(R * 1.06, seg(40), seg(28), 0, Math.PI * 2, 0, Math.PI * 0.52);
  capGeo.scale(1.03, 0.92, 1.0);
  const cap = add(head, capGeo, hairM, 0, 0.1, -0.05);
  cap.rotation.x = -0.32;
  const backGeo = new THREE.SphereGeometry(R * 1.03, seg(32), seg(24), Math.PI * 1.1, Math.PI * 0.8, 0.25, Math.PI * 0.55);
  add(head, backGeo, hairM, 0, 0.0, -0.03);
  // 앞머리 (왼쪽 가르마로 오른쪽으로 쓸어 넘김)
  const fringe = new THREE.SphereGeometry(0.34, seg(20), seg(14));
  fringe.scale(1.35, 0.42, 0.7);
  const fr = add(head, fringe, hairM, 0.06, 0.4, 0.33);
  fr.rotation.set(-0.5, 0, -0.12);
  // 옆머리(구레나룻)
  [-1, 1].forEach((s) => {
    const g = new THREE.SphereGeometry(0.12, 10, 10);
    g.scale(0.4, 1.2, 0.8);
    add(head, g, hairM, s * 0.56, 0.12, 0.12);
  });

  // 얼굴 위 점 계산: 구 표면 앞쪽 (x, y)에서 z
  const faceZ = (x: number, y: number) => Math.sqrt(Math.max(0, R * R - x * x - y * y)) * 0.94 + 0.005;
  const onFace = (m: THREE.Object3D, x: number, y: number) => {
    m.position.set(x, y, faceZ(x, y));
    m.lookAt(new THREE.Vector3(x * 2.2, y * 2.2, faceZ(x, y) * 2.2));
    head.add(m);
    return m;
  };

  // 웃는 눈(^ ^) — 반원 토러스
  const eyeGroup: THREE.Mesh[] = [];
  [-1, 1].forEach((s) => {
    const g = new THREE.TorusGeometry(0.075, 0.017, 8, 20, Math.PI);
    const e = new THREE.Mesh(g, lineM);
    onFace(e, s * 0.2, 0.02);
    eyeGroup.push(e);
  });
  // 눈썹
  [-1, 1].forEach((s) => {
    const g = new THREE.CapsuleGeometry(0.022, 0.12, 4, 8);
    const b = new THREE.Mesh(g, hairM);
    onFace(b, s * 0.21, 0.2);
    b.rotateZ(Math.PI / 2 + s * 0.12);
  });
  // 코
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 12), skinM);
  onFace(nose, 0, -0.08);
  nose.position.z += 0.015;
  // 미소
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.016, 8, 24, Math.PI), new THREE.MeshStandardMaterial({ color: C.mouth, roughness: 0.5 }));
  onFace(smile, 0, -0.18);
  smile.rotateZ(Math.PI);
  // 볼 터치
  const blushM = new THREE.MeshBasicMaterial({ color: C.blush, transparent: true, opacity: 0.45 });
  [-1, 1].forEach((s) => {
    const g = new THREE.CircleGeometry(0.07, 20);
    g.scale(1.3, 0.8, 1);
    onFace(new THREE.Mesh(g, blushM), s * 0.33, -0.1);
  });

  return { root, body, head, arms, eyes: eyeGroup };
}

// 작은 선박(선체 + 선교 + 굴뚝)
function createShip(color: number, scale: number) {
  const g = new THREE.Group();
  const hullShape = new THREE.Shape();
  hullShape.moveTo(-0.9, 0);
  hullShape.lineTo(0.7, 0);
  hullShape.quadraticCurveTo(1.05, 0, 1.15, 0.0);
  hullShape.lineTo(0.7, 0.32);
  hullShape.lineTo(-0.9, 0.32);
  hullShape.closePath();
  // 위에서 본 선체 모양을 세로로 밀어 올림
  const top = new THREE.Shape();
  top.moveTo(-1, -0.28);
  top.lineTo(0.6, -0.28);
  top.quadraticCurveTo(1.25, 0, 0.6, 0.28);
  top.lineTo(-1, 0.28);
  top.closePath();
  const hullGeo = new THREE.ExtrudeGeometry(top, { depth: 0.3, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 2 });
  hullGeo.rotateX(-Math.PI / 2);
  const hull = new THREE.Mesh(hullGeo, new THREE.MeshStandardMaterial({ color, roughness: 0.6 }));
  hull.position.y = -0.1;
  g.add(hull);
  const deck = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.05, 0.5), new THREE.MeshStandardMaterial({ color: 0xd9dee4, roughness: 0.8 }));
  deck.position.set(-0.15, 0.24, 0);
  g.add(deck);
  const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.32, 0.46), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 }));
  bridge.position.set(-0.7, 0.42, 0);
  g.add(bridge);
  const win = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.07, 0.4), new THREE.MeshBasicMaterial({ color: 0xffe9a8 }));
  win.position.set(-0.52, 0.5, 0);
  g.add(win);
  const funnel = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.2, 10), new THREE.MeshStandardMaterial({ color: 0xc0392b }));
  funnel.position.set(-0.85, 0.66, 0);
  g.add(funnel);
  // 컨테이너 몇 개
  const boxColors = [0x2e86de, 0xe67e22, 0x27ae60, 0xc0392b];
  for (let i = 0; i < 3; i++) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.16, 0.42), new THREE.MeshStandardMaterial({ color: boxColors[(i + color) % 4], roughness: 0.7 }));
    b.position.set(-0.2 + i * 0.3, 0.35, 0);
    g.add(b);
  }
  g.scale.setScalar(scale);
  return g;
}

export function mountHeroScene(host: HTMLElement, opts: Opts): HeroScene {
  const { mobile, reducedMotion } = opts;
  const quality = mobile ? 0.6 : 1;
  const W = () => host.clientWidth;
  const H = () => host.clientHeight;

  const renderer = new THREE.WebGLRenderer({ antialias: !mobile, alpha: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2));
  renderer.setSize(W(), H());
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = !mobile;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.setAttribute("aria-hidden", "true");
  renderer.domElement.style.display = "block";
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0b2238, 18, 46);
  const camera = new THREE.PerspectiveCamera(mobile ? 40 : 32, W() / H(), 0.1, 120);

  // 캐릭터 위치: 데스크톱은 오른쪽, 휴대폰은 가운데
  const focus = mobile ? new THREE.Vector3(0, 1.3, 0) : new THREE.Vector3(2.6, 1.4, 0);
  const camBase = mobile ? new THREE.Vector3(0, 2.4, 10.5) : new THREE.Vector3(0.6, 3.0, 12.5);
  camera.position.copy(camBase);
  const lookTarget = mobile ? new THREE.Vector3(0.3, 1.25, 0) : new THREE.Vector3(1.2, 1.5, 0);
  camera.lookAt(lookTarget);

  // 빛: 해 질 녘
  scene.add(new THREE.HemisphereLight(0xcfe6ff, 0x0b2238, 0.9));
  const sun = new THREE.DirectionalLight(0xffe2c0, 2.2);
  sun.position.set(-5, 8, 7);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = -4;
  sun.shadow.camera.right = 6;
  sun.shadow.camera.top = 5;
  sun.shadow.camera.bottom = -3;
  scene.add(sun);
  const rimLight = new THREE.PointLight(C.accent, 14, 14);
  rimLight.position.set(focus.x + 2.5, 3, -1.5);
  scene.add(rimLight);
  const fill = new THREE.PointLight(0xffb37a, 6, 10);
  fill.position.set(focus.x - 2, 2, 3);
  scene.add(fill);

  // 바다: 사인파 겹친 수면 셰이더
  const seaSeg = mobile ? 80 : 160;
  const seaGeo = new THREE.PlaneGeometry(90, 60, seaSeg, Math.round(seaSeg * 0.66));
  seaGeo.rotateX(-Math.PI / 2);
  const seaMat = new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      uTime: { value: 0 },
      uDeep: { value: new THREE.Color(0x061a30) },
      uMid: { value: new THREE.Color(0x0f5a8f) },
      uTop: { value: new THREE.Color(0x2ec4b6) },
      uSun: { value: new THREE.Vector3(-0.4, 0.5, -0.75).normalize() },
      uSunCol: { value: new THREE.Color(0xffc48a) },
    },
    vertexShader: `
      uniform float uTime; varying float vH; varying vec3 vPos;
      float wave(vec2 p){ return sin(p.x*0.45+uTime*0.8)*0.18 + sin(p.y*0.7+uTime*1.1)*0.12 + sin((p.x+p.y)*1.3+uTime*1.6)*0.05; }
      void main(){ vec3 p = position; p.y += wave(p.xz); vH = p.y; vPos = (modelMatrix*vec4(p,1.0)).xyz; gl_Position = projectionMatrix*viewMatrix*vec4(vPos,1.0); }`,
    fragmentShader: `
      uniform vec3 uDeep; uniform vec3 uMid; uniform vec3 uTop; uniform vec3 uSun; uniform vec3 uSunCol; varying float vH; varying vec3 vPos;
      void main(){
        vec3 n = normalize(cross(dFdx(vPos), dFdy(vPos)));
        float h = smoothstep(-0.3, 0.35, vH);
        vec3 col = mix(uDeep, uMid, h); col = mix(col, uTop, smoothstep(0.2, 0.38, vH)*0.3);
        vec3 v = normalize(cameraPosition - vPos);
        float spec = pow(max(dot(reflect(-uSun, n), v), 0.0), 40.0);
        float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
        col += uSunCol*spec*0.5 + uTop*fres*0.2;
        float fade = smoothstep(40.0, 14.0, length(vPos.xz - cameraPosition.xz));
        gl_FragColor = vec4(col, fade);
      }`,
  });
  const sea = new THREE.Mesh(seaGeo, seaMat);
  sea.position.y = -0.35;
  scene.add(sea);

  // 별
  {
    const n = mobile ? 120 : 260;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = 6 + Math.random() * 18;
      pos[i * 3 + 2] = -25 - Math.random() * 10;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    scene.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 0.09, transparent: true, opacity: 0.8 })));
  }

  // 둥근 부두
  const dock = new THREE.Group();
  dock.position.set(focus.x, -0.15, 0);
  scene.add(dock);
  const dockTop = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.35, 0.3, 48), new THREE.MeshStandardMaterial({ color: C.deck, roughness: 0.7 }));
  dockTop.receiveShadow = true;
  dock.add(dockTop);
  const dockRing = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.035, 8, 64), new THREE.MeshBasicMaterial({ color: C.rim }));
  dockRing.rotation.x = Math.PI / 2;
  dockRing.position.y = 0.15;
  dock.add(dockRing);
  const pillar = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 0.9, 1.4, 32), new THREE.MeshStandardMaterial({ color: 0x24384a, roughness: 0.8 }));
  pillar.position.y = -0.85;
  dock.add(pillar);

  // VTS 레이더 마스트
  const radarBase = new THREE.Vector3(focus.x + (mobile ? 1.8 : 2.4), -0.2, -3.2);
  const mast = new THREE.Group();
  mast.position.copy(radarBase);
  mast.scale.setScalar(0.8);
  scene.add(mast);
  const mastM = new THREE.MeshStandardMaterial({ color: 0xe8edf2, roughness: 0.5 });
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.12, 3.6, 12), mastM);
  pole.position.y = 1.6;
  mast.add(pole);
  const platform = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.08, 20), mastM);
  platform.position.y = 3.4;
  mast.add(platform);
  const radarHead = new THREE.Group();
  radarHead.position.y = 3.55;
  mast.add(radarHead);
  const antenna = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.1, 0.12), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 }));
  radarHead.add(antenna);
  const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 10), new THREE.MeshBasicMaterial({ color: 0xff4d4d }));
  beacon.position.set(0, 3.85, 0);
  mast.add(beacon);

  // 바다 위 레이더 원 + 회전하는 쓸기 부채꼴
  const radarR = mobile ? 6 : 8.5;
  const radarCenter = new THREE.Vector3(radarBase.x - (mobile ? 1.5 : 2.5), -0.2, -1);
  const radarGroup = new THREE.Group();
  radarGroup.position.copy(radarCenter);
  scene.add(radarGroup);
  const ringM = new THREE.MeshBasicMaterial({ color: C.accent, transparent: true, opacity: 0.35, depthWrite: false });
  [0.33, 0.66, 1].forEach((f) => {
    const r = new THREE.Mesh(new THREE.RingGeometry(radarR * f - 0.03, radarR * f, 96), ringM);
    r.rotation.x = -Math.PI / 2;
    radarGroup.add(r);
  });
  const sweepM = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: { uCol: { value: new THREE.Color(C.accent) } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `uniform vec3 uCol; varying vec2 vUv;
      void main(){ vec2 p = vUv-0.5; float a = atan(p.y,p.x); float t = clamp(a/0.9,0.0,1.0); float r = length(p)*2.0;
        float alpha = (a>0.0 && a<0.9) ? (1.0-t)*0.35*smoothstep(1.0,0.2,r) : 0.0; gl_FragColor = vec4(uCol, alpha); }`,
  });
  const sweep = new THREE.Mesh(new THREE.CircleGeometry(radarR, 64), sweepM);
  sweep.rotation.x = -Math.PI / 2;
  sweep.position.y = 0.01;
  radarGroup.add(sweep);

  // 선박들 (항로 위를 지나가며 표적 고리를 단다)
  type Ship = { obj: THREE.Group; ring: THREE.Mesh; speed: number; z: number; x: number; dir: number; bob: number };
  const ships: Ship[] = [];
  const lanes = mobile
    ? [[-3.5, 1, 0.55], [-6, -1, 0.45]]
    : [[-5.5, 1, 0.6], [-8, -1, 0.5], [-12, 1, 0.42], [-4, -1, 0.35]];
  lanes.forEach(([z, dir, sc], i) => {
    const obj = createShip(i, sc);
    obj.rotation.y = dir > 0 ? 0 : Math.PI;
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.9, 1.0, 40),
      new THREE.MeshBasicMaterial({ color: C.accent, transparent: true, opacity: 0.7, depthWrite: false }),
    );
    ring.rotation.x = -Math.PI / 2;
    scene.add(obj, ring);
    ships.push({ obj, ring, speed: 0.5 + i * 0.12, z, dir, x: -14 + i * 7, bob: i * 1.3 });
  });

  // 캐릭터
  const CHAR_SCALE = mobile ? 1.35 : 1.25;
  const prof = createProfessor(quality);
  prof.root.position.set(focus.x, 0, 0.1);
  prof.root.rotation.y = mobile ? 0 : -0.35;
  scene.add(prof.root);

  // 상태
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  let waveT = reducedMotion ? 0 : 2.4; // 처음 등장할 때 손 흔들기
  let jumpT = 0;
  let introT = 0;
  const startWave = () => {
    waveT = 2.4;
    jumpT = 0.7;
  };

  const onMove = (e: PointerEvent) => {
    const r = host.getBoundingClientRect();
    pointer.tx = ((e.clientX - r.left) / r.width) * 2 - 1;
    pointer.ty = -(((e.clientY - r.top) / r.height) * 2 - 1);
  };
  window.addEventListener("pointermove", onMove, { passive: true });

  const ray = new THREE.Raycaster();
  const onClick = (e: PointerEvent) => {
    const r = host.getBoundingClientRect();
    const v = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -(((e.clientY - r.top) / r.height) * 2 - 1));
    ray.setFromCamera(v, camera);
    if (ray.intersectObject(prof.root, true).length) startWave();
  };
  host.addEventListener("pointerdown", onClick);

  const onResize = () => {
    camera.aspect = W() / H();
    camera.updateProjectionMatrix();
    renderer.setSize(W(), H());
  };
  const ro = new ResizeObserver(onResize);
  ro.observe(host);

  let visible = true;
  const io = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible) loop();
  });
  io.observe(host);
  const onVis = () => {
    if (!document.hidden) loop();
  };
  document.addEventListener("visibilitychange", onVis);

  const clock = new THREE.Clock();
  let raf = 0;
  let disposed = false;
  const tmp = new THREE.Vector3();

  function update(dt: number, t: number) {
    pointer.x += (pointer.tx - pointer.x) * Math.min(1, dt * 4);
    pointer.y += (pointer.ty - pointer.y) * Math.min(1, dt * 4);

    seaMat.uniforms.uTime.value = t;
    radarHead.rotation.y = t * 1.6;
    sweep.rotation.z = -t * 1.6;
    (beacon.material as THREE.MeshBasicMaterial).color.setHSL(0, 1, 0.45 + 0.25 * (Math.sin(t * 4) > 0.6 ? 1 : 0));

    // 선박 이동
    ships.forEach((s) => {
      s.x += s.speed * dt * s.dir;
      if (s.x > 16) s.x = -16;
      if (s.x < -16) s.x = 16;
      const y = -0.25 + Math.sin(t * 1.4 + s.bob) * 0.05;
      s.obj.position.set(s.x, y, s.z);
      s.obj.rotation.z = Math.sin(t * 1.1 + s.bob) * 0.03;
      s.ring.position.set(s.x, -0.18, s.z);
      const pulse = (t * 0.8 + s.bob) % 1;
      s.ring.scale.setScalar(0.8 + pulse * 0.8);
      (s.ring.material as THREE.MeshBasicMaterial).opacity = 0.7 * (1 - pulse);
    });

    // 등장: 아래에서 튀어 오르며 커짐
    introT = Math.min(1, introT + dt * 1.2);
    const k = 1 - Math.pow(1 - introT, 3);
    const overshoot = 1 + Math.sin(introT * Math.PI) * 0.12;
    prof.root.scale.setScalar(Math.max(0.001, k * overshoot) * CHAR_SCALE);

    // 숨쉬기·점프
    let jy = 0;
    if (jumpT > 0) {
      jumpT = Math.max(0, jumpT - dt);
      const p = 1 - jumpT / 0.7;
      jy = Math.sin(p * Math.PI) * 0.45;
    }
    prof.body.position.y = jy + Math.sin(t * 2.2) * 0.02;
    prof.body.scale.set(1 + Math.sin(t * 2.2) * 0.008, 1 - Math.sin(t * 2.2) * 0.008, 1);

    // 고개: 마우스 쪽으로
    prof.head.rotation.y = THREE.MathUtils.clamp(pointer.x * 0.6 - prof.root.rotation.y * 0.6, -0.7, 0.7);
    prof.head.rotation.x = THREE.MathUtils.clamp(-pointer.y * 0.25, -0.25, 0.3);
    prof.head.rotation.z = Math.sin(t * 1.3) * 0.04;

    // 팔: 손 흔들기
    const [left, right] = prof.arms;
    if (waveT > 0) {
      waveT = Math.max(0, waveT - dt);
      const ramp = Math.min(1, (2.4 - waveT) * 5, waveT * 5);
      right.rotation.z = 0.12 + ramp * (2.5 + Math.sin(t * 14) * 0.35);
      right.rotation.x = -ramp * 0.2;
    } else {
      right.rotation.z = 0.12 + Math.sin(t * 2.2) * 0.03;
      right.rotation.x = 0;
    }
    left.rotation.z = -0.12 - Math.sin(t * 2.2) * 0.03;

    // 깜빡임 대신 웃는 눈을 살짝 눌렀다 펴기
    const blink = (t % 4.2) < 0.12 ? 0.35 : 1;
    prof.eyes.forEach((e) => e.scale.set(1, blink, 1));

    // 카메라 시차
    camera.position.set(camBase.x + pointer.x * 0.6, camBase.y + pointer.y * 0.3, camBase.z);
    camera.lookAt(lookTarget);

    // 말풍선 위치 알림
    if (opts.onCharacterScreenPos) {
      prof.head.getWorldPosition(tmp);
      tmp.y += 0.75 * prof.root.scale.y;
      tmp.project(camera);
      opts.onCharacterScreenPos((tmp.x * 0.5 + 0.5) * W(), (-tmp.y * 0.5 + 0.5) * H());
    }
  }

  function loop() {
    if (disposed || raf) return;
    const step = () => {
      raf = 0;
      if (disposed || !visible || document.hidden) return;
      const dt = Math.min(0.05, clock.getDelta());
      update(dt, clock.elapsedTime);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(step);
    };
    clock.getDelta();
    raf = requestAnimationFrame(step);
  }

  if (reducedMotion) {
    introT = 1;
    update(0, 1.2);
    renderer.render(scene, camera);
  } else {
    loop();
  }

  return {
    wave: () => {
      startWave();
      if (reducedMotion) {
        update(0.016, clock.getElapsedTime());
        renderer.render(scene, camera);
      }
    },
    dispose: () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerdown", onClick);
      document.removeEventListener("visibilitychange", onVis);
      ro.disconnect();
      io.disconnect();
      scene.traverse((o) => {
        const m = o as THREE.Mesh;
        if (m.geometry) m.geometry.dispose();
        const mat = m.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
        else if (mat) mat.dispose();
      });
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
