// 히어로 장면의 선박 모델. 모두 코드로 만든다.
// 선체는 위에서 본 윤곽(뾰족한 선수, 둥근 선미)을 밀어 올려 만들고, 흘수선 띠·갑판·상부구조·연돌·항해등을 붙인다.
// 각 선박은 선미 뒤로 V자 항적(물보라) 셰이더를 끌고 간다. 선박의 앞은 +x 방향이다.
import * as THREE from "three";

export type VesselKind = "container" | "tanker" | "ferry" | "carCarrier" | "tug" | "fishing";

export type Vessel = {
  group: THREE.Group;
  length: number;
  beam: number;
  wake: THREE.ShaderMaterial;
  label: string;
};

const mat = (color: number, rough = 0.6, metal = 0.05) =>
  new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal });
const glow = (color: number) => new THREE.MeshBasicMaterial({ color });

function hullOutline(L: number, B: number, bowLen: number, sternRound: number) {
  const s = new THREE.Shape();
  const h = B / 2;
  s.moveTo(-L / 2 + sternRound, -h);
  s.lineTo(L / 2 - bowLen, -h);
  s.bezierCurveTo(L / 2 - bowLen * 0.35, -h, L / 2, -h * 0.35, L / 2, 0);
  s.bezierCurveTo(L / 2, h * 0.35, L / 2 - bowLen * 0.35, h, L / 2 - bowLen, h);
  s.lineTo(-L / 2 + sternRound, h);
  s.quadraticCurveTo(-L / 2, h, -L / 2, h - sternRound);
  s.lineTo(-L / 2, -h + sternRound);
  s.quadraticCurveTo(-L / 2, -h, -L / 2 + sternRound, -h);
  return s;
}

// 위에서 본 윤곽을 높이 depth만큼 밀어 올린 선체 조각 (y=0이 바닥)
function extrudeOutline(shape: THREE.Shape, depth: number, bevel = 0.03) {
  const g = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: bevel > 0,
    bevelSize: bevel,
    bevelThickness: bevel,
    bevelSegments: 2,
    curveSegments: 14,
  });
  g.rotateX(-Math.PI / 2); // 윤곽의 y → -z, 밀어 올린 방향 → +y
  return g;
}

function box(w: number, h: number, d: number, m: THREE.Material, x: number, y: number, z = 0) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  mesh.position.set(x, y + h / 2, z);
  mesh.castShadow = true;
  return mesh;
}

// 창문 띠: 밝은 노란 빛이 새어 나오는 얇은 판 (앞·양옆)
function windowBand(w: number, d: number, y: number, x: number, color = 0xffe3a3) {
  const g = new THREE.Group();
  const m = glow(color);
  const front = new THREE.Mesh(new THREE.PlaneGeometry(d * 0.86, 0.07), m);
  front.position.set(x + w / 2 + 0.003, y, 0);
  front.rotation.y = Math.PI / 2;
  g.add(front);
  [-1, 1].forEach((s) => {
    const side = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.8, 0.06), m);
    side.position.set(x, y, s * (d / 2 + 0.003));
    if (s < 0) side.rotation.y = Math.PI;
    g.add(side);
  });
  return g;
}

function navLights(g: THREE.Group, L: number, B: number, topY: number, mastX: number) {
  const r = 0.045;
  const geo = new THREE.SphereGeometry(r, 10, 8);
  const white = new THREE.Mesh(geo, glow(0xffffff));
  white.position.set(mastX, topY, 0);
  const red = new THREE.Mesh(geo, glow(0xff3b3b)); // 좌현(왼쪽, +z가 좌현이 되도록 선수 +x 기준)
  red.position.set(mastX - 0.1, topY - 0.35, B / 2 + 0.06);
  const green = new THREE.Mesh(geo, glow(0x35ff7a)); // 우현
  green.position.set(mastX - 0.1, topY - 0.35, -B / 2 - 0.06);
  const stern = new THREE.Mesh(geo, glow(0xfff1d6));
  stern.position.set(-L / 2 - 0.02, 0.5, 0);
  g.add(white, red, green, stern);
}

function wakeMaterial() {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { uTime: { value: 0 }, uSpeed: { value: 1 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `
      uniform float uTime; uniform float uSpeed; varying vec2 vUv;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
      void main(){
        float u = vUv.x;               // 0 = 선미, 1 = 항적 끝
        float v = abs(vUv.y - 0.5) * 2.0;
        float w = 0.28 + u * 0.72;     // 뒤로 갈수록 넓어지는 V
        float n = noise(vec2(u*18.0 + uTime*uSpeed*2.0, v*6.0)) * 0.6 + noise(vec2(u*40.0 + uTime*uSpeed*3.5, v*14.0)) * 0.4;
        float edge = smoothstep(w - 0.16, w - 0.02, v) * (1.0 - smoothstep(w - 0.02, w + 0.04, v));
        float core = (1.0 - smoothstep(0.0, 0.32 + u*0.25, v)) * (1.0 - smoothstep(0.0, 0.55, u));
        float a = (edge * 0.85 + core * 0.75) * (0.55 + n * 0.6) * pow(1.0 - u, 1.4);
        gl_FragColor = vec4(vec3(0.92, 0.97, 1.0), a * 0.85);
      }`,
  });
}

function addWake(g: THREE.Group, L: number, B: number) {
  const len = L * 2.4;
  const wid = B * 3.2;
  const m = wakeMaterial();
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(len, wid), m);
  plane.rotation.x = -Math.PI / 2;
  plane.rotation.z = Math.PI; // uv.x 0이 선미 쪽에 오도록
  plane.position.set(-L / 2 - len / 2 + L * 0.12, 0.06, 0);
  plane.renderOrder = 2;
  g.add(plane);
  // 선수 물결
  const bow = new THREE.Mesh(new THREE.PlaneGeometry(B * 1.4, B * 1.6), m);
  bow.rotation.x = -Math.PI / 2;
  bow.rotation.z = Math.PI;
  bow.position.set(L / 2 - B * 0.6, 0.06, 0);
  bow.renderOrder = 2;
  g.add(bow);
  return m;
}

// 공통 선체: 아래 짙은 선저색, 흘수선 띠, 위 선체색, 갑판
function buildHull(g: THREE.Group, L: number, B: number, D: number, opts: { hull: number; bottom: number; deck: number; bow?: number; stern?: number; band?: number }) {
  const shape = hullOutline(L, B, opts.bow ?? B * 1.1, opts.stern ?? B * 0.25);
  const lower = new THREE.Mesh(extrudeOutline(shape, 0.32, 0.02), mat(opts.bottom, 0.7));
  lower.position.y = -0.32;
  g.add(lower);
  const band = new THREE.Mesh(extrudeOutline(shape, 0.05, 0.035), mat(opts.band ?? 0xf3f3f3, 0.5));
  band.position.y = -0.02;
  g.add(band);
  const upper = new THREE.Mesh(extrudeOutline(shape, D, 0.03), mat(opts.hull, 0.55));
  upper.position.y = 0.03;
  upper.castShadow = true;
  g.add(upper);
  const inner = hullOutline(L * 0.97, B * 0.9, (opts.bow ?? B * 1.1) * 0.95, (opts.stern ?? B * 0.25) * 0.9);
  const deck = new THREE.Mesh(new THREE.ShapeGeometry(inner, 14), mat(opts.deck, 0.85));
  deck.rotation.x = -Math.PI / 2;
  deck.position.y = 0.03 + D + 0.031;
  g.add(deck);
  return 0.03 + D + 0.03; // 갑판 높이
}

const BOX_COLORS = [0x1f6fb2, 0xd35400, 0x2e8b57, 0xb03a2e, 0xe1b12c, 0x7f8c8d, 0x8e44ad, 0x16a085, 0xecf0f1, 0x2c3e50];

function containerShip(seed: number): Vessel {
  const g = new THREE.Group();
  const L = 9, B = 1.45, D = 0.62;
  const deckY = buildHull(g, L, B, D, { hull: seed % 2 ? 0x1c2c52 : 0x6e1e22, bottom: 0x8c2a22, deck: 0x4a5560, bow: 1.9 });
  // 선수루
  g.add(box(0.9, 0.18, B * 0.8, mat(seed % 2 ? 0x1c2c52 : 0x6e1e22), L / 2 - 1.3, deckY));
  // 컨테이너 (인스턴스)
  const bays = 13, rows = 5;
  const cw = 0.42, ch = 0.2, cd = (B * 0.86) / rows;
  const geo = new THREE.BoxGeometry(cw * 0.94, ch * 0.92, cd * 0.92);
  const im = new THREE.InstancedMesh(geo, mat(0xffffff, 0.75), bays * rows * 5);
  const m4 = new THREE.Matrix4();
  const col = new THREE.Color();
  let n = 0;
  let rnd = seed * 9301 + 49297;
  const rand = () => ((rnd = (rnd * 9301 + 49297) % 233280) / 233280);
  const x0 = -L / 2 + 2.25;
  for (let b = 0; b < bays; b++) {
    const x = x0 + b * (cw + 0.03);
    if (x > L / 2 - 1.9) break;
    const taper = x > L / 2 - 2.8 ? 1 : 0; // 선수 쪽은 한 줄씩 줄임
    for (let r = taper; r < rows - taper; r++) {
      const tiers = 2 + Math.floor(rand() * 3) - (taper ? 1 : 0);
      for (let t = 0; t < tiers; t++) {
        m4.makeTranslation(x, deckY + ch / 2 + t * ch, -B * 0.43 + cd / 2 + r * cd);
        im.setMatrixAt(n, m4);
        im.setColorAt(n, col.setHex(BOX_COLORS[Math.floor(rand() * BOX_COLORS.length)]));
        n++;
      }
    }
  }
  im.count = n;
  im.castShadow = true;
  g.add(im);
  // 선미 거주구역 + 선교
  const white = mat(0xf4f6f8, 0.45);
  const hx = -L / 2 + 1.25;
  g.add(box(0.9, 1.15, B * 0.86, white, hx, deckY));
  g.add(box(1.0, 0.22, B * 1.2, white, hx + 0.05, deckY + 1.15));
  [0.3, 0.55, 0.8].forEach((y) => g.add(windowBand(0.9, B * 0.86, deckY + y, hx)));
  const bridgeWin = new THREE.Mesh(new THREE.PlaneGeometry(B * 1.1, 0.1), glow(0x9fe8ff));
  bridgeWin.position.set(hx + 0.555, deckY + 1.26, 0);
  bridgeWin.rotation.y = Math.PI / 2;
  g.add(bridgeWin);
  // 연돌
  const funnel = box(0.36, 0.5, 0.42, mat(0x1a1a1a), hx - 0.5, deckY + 0.95);
  g.add(funnel);
  g.add(box(0.37, 0.12, 0.43, mat(seed % 2 ? 0xe74c3c : 0x2e86de), hx - 0.5, deckY + 1.25));
  // 마스트
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 0.55, 6), mat(0xdddddd));
  mast.position.set(hx + 0.1, deckY + 1.37 + 0.27, 0);
  g.add(mast);
  navLights(g, L, B, deckY + 1.95, hx + 0.1);
  const wake = addWake(g, L, B);
  return { group: g, length: L, beam: B, wake, label: "CONTAINER" };
}

function tanker(): Vessel {
  const g = new THREE.Group();
  const L = 8.2, B = 1.55, D = 0.55;
  const deckY = buildHull(g, L, B, D, { hull: 0x1d1f24, bottom: 0x9b2c22, deck: 0x8d3a2b, bow: 1.7 });
  // 갑판 배관
  const pipeM = mat(0xd8d8d8, 0.4, 0.4);
  [-0.18, 0, 0.18].forEach((z) => {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, L * 0.62, 8), pipeM);
    p.rotation.z = Math.PI / 2;
    p.position.set(0.6, deckY + 0.08, z);
    g.add(p);
  });
  // 통로(캣워크)와 매니폴드 크레인
  g.add(box(L * 0.62, 0.03, 0.18, mat(0xe9e2c8), 0.6, deckY + 0.22, 0));
  g.add(box(0.08, 0.5, 0.08, mat(0xf0c419), 0.2, deckY, 0.45));
  const jib = box(0.7, 0.05, 0.05, mat(0xf0c419), 0.5, deckY + 0.48, 0.45);
  jib.rotation.z = -0.25;
  g.add(jib);
  // 탱크 해치 줄
  for (let i = 0; i < 6; i++) g.add(box(0.24, 0.08, 0.3, mat(0x7a3326), -1.2 + i * 0.75, deckY, -0.42));
  const white = mat(0xf2f2ee, 0.45);
  const hx = -L / 2 + 1.0;
  g.add(box(0.85, 1.05, B * 0.82, white, hx, deckY));
  g.add(box(0.95, 0.2, B * 1.18, white, hx + 0.05, deckY + 1.05));
  [0.3, 0.6].forEach((y) => g.add(windowBand(0.85, B * 0.82, deckY + y, hx)));
  const bridgeWin = new THREE.Mesh(new THREE.PlaneGeometry(B * 1.05, 0.09), glow(0x9fe8ff));
  bridgeWin.position.set(hx + 0.53, deckY + 1.15, 0);
  bridgeWin.rotation.y = Math.PI / 2;
  g.add(bridgeWin);
  g.add(box(0.34, 0.48, 0.4, mat(0x1a1a1a), hx - 0.45, deckY + 0.85));
  g.add(box(0.35, 0.12, 0.41, mat(0xf39c12), hx - 0.45, deckY + 1.12));
  navLights(g, L, B, deckY + 1.7, hx + 0.1);
  const wake = addWake(g, L, B);
  return { group: g, length: L, beam: B, wake, label: "TANKER" };
}

function ferry(): Vessel {
  const g = new THREE.Group();
  const L = 6.4, B = 1.25, D = 0.62;
  const deckY = buildHull(g, L, B, D, { hull: 0xf5f7fa, bottom: 0x1f3d7a, deck: 0xdfe5ea, bow: 1.5, band: 0x1f6fb2 });
  // 선체 파란 띠
  const stripe = new THREE.Mesh(extrudeOutline(hullOutline(L * 1.002, B * 1.01, 1.5, 0.31), 0.07, 0.03), mat(0x1f6fb2, 0.4));
  stripe.position.y = 0.32;
  g.add(stripe);
  const white = mat(0xffffff, 0.35);
  const decks = [
    { x: -0.4, w: L * 0.72, h: 0.36 },
    { x: -0.55, w: L * 0.6, h: 0.32 },
    { x: -0.4, w: L * 0.38, h: 0.3 },
  ];
  let y = deckY;
  decks.forEach((d, i) => {
    g.add(box(d.w, d.h, B * (0.92 - i * 0.06), white, d.x, y));
    // 객실 창 띠 (양옆, 길게)
    [-1, 1].forEach((s) => {
      const band = new THREE.Mesh(new THREE.PlaneGeometry(d.w * 0.9, 0.1), glow(i === 2 ? 0x9fe8ff : 0xffe3a3));
      band.position.set(d.x, y + d.h * 0.55, s * ((B * (0.92 - i * 0.06)) / 2 + 0.004));
      if (s < 0) band.rotation.y = Math.PI;
      g.add(band);
    });
    y += d.h;
  });
  const funnel = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 0.5, 14), mat(0x1f6fb2, 0.4));
  funnel.position.set(-1.7, y + 0.2, 0);
  funnel.rotation.z = 0.18;
  g.add(funnel);
  // 구명정
  [-1, 1].forEach((s) =>
    [-1.3, -0.4, 0.5].forEach((x) => {
      const b = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.3, 4, 8), mat(0xff6a13, 0.5));
      b.rotation.z = Math.PI / 2;
      b.position.set(x, deckY + 0.5, s * (B * 0.49));
      g.add(b);
    }),
  );
  navLights(g, L, B, y + 0.5, 0.6);
  const wake = addWake(g, L, B);
  return { group: g, length: L, beam: B, wake, label: "PASSENGER" };
}

function carCarrier(): Vessel {
  const g = new THREE.Group();
  const L = 8.4, B = 1.5, D = 0.4;
  const deckY = buildHull(g, L, B, D, { hull: 0xeef1f4, bottom: 0x8c2a22, deck: 0xcfd6dc, bow: 1.2 });
  const shape = hullOutline(L * 0.97, B * 0.97, 1.0, 0.2);
  const block = new THREE.Mesh(extrudeOutline(shape, 1.45, 0.04), mat(0xf4f6f8, 0.4));
  block.position.y = deckY - 0.03;
  block.castShadow = true;
  g.add(block);
  // 회사 띠
  const stripe = new THREE.Mesh(extrudeOutline(hullOutline(L * 0.975, B * 0.98, 1.0, 0.2), 0.12, 0.04), mat(0x1f6fb2, 0.4));
  stripe.position.y = deckY + 0.55;
  g.add(stripe);
  const bridgeWin = new THREE.Mesh(new THREE.PlaneGeometry(B * 0.8, 0.12), glow(0x9fe8ff));
  bridgeWin.position.set(L / 2 - 1.05, deckY + 1.3, 0);
  bridgeWin.rotation.y = Math.PI / 2;
  bridgeWin.rotation.x = 0;
  g.add(bridgeWin);
  g.add(box(0.3, 0.3, 0.36, mat(0x1a1a1a), -L / 2 + 0.7, deckY + 1.42));
  navLights(g, L, B, deckY + 1.95, L / 2 - 1.3);
  const wake = addWake(g, L, B);
  return { group: g, length: L, beam: B, wake, label: "RO-RO" };
}

function tug(): Vessel {
  const g = new THREE.Group();
  const L = 2.2, B = 0.8, D = 0.38;
  const deckY = buildHull(g, L, B, D, { hull: 0xc0392b, bottom: 0x1a1a1a, deck: 0x6b6f75, bow: 0.55, stern: 0.3 });
  // 고무 펜더
  const fender = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.06, 8, 24, Math.PI), mat(0x111111, 0.9));
  fender.rotation.x = Math.PI / 2;
  fender.rotation.z = -Math.PI / 2;
  fender.scale.set(1.3, 1, 1);
  fender.position.set(L / 2 - 0.45, deckY - 0.05, 0);
  g.add(fender);
  const white = mat(0xffffff, 0.4);
  g.add(box(0.75, 0.38, B * 0.72, white, 0.1, deckY));
  g.add(box(0.55, 0.26, B * 0.66, white, 0.12, deckY + 0.38));
  g.add(windowBand(0.55, B * 0.66, deckY + 0.52, 0.12, 0x9fe8ff));
  g.add(box(0.16, 0.3, 0.2, mat(0x1a1a1a), -0.35, deckY + 0.3));
  navLights(g, L, B, deckY + 1.0, 0.15);
  const wake = addWake(g, L, B);
  return { group: g, length: L, beam: B, wake, label: "TUG" };
}

function fishing(): Vessel {
  const g = new THREE.Group();
  const L = 2.4, B = 0.75, D = 0.36;
  const deckY = buildHull(g, L, B, D, { hull: 0x1f6fb2, bottom: 0x8c2a22, deck: 0xa9a28f, bow: 0.8, stern: 0.15 });
  g.add(box(0.6, 0.42, B * 0.7, mat(0xffffff, 0.45), 0.35, deckY));
  g.add(windowBand(0.6, B * 0.7, deckY + 0.3, 0.35, 0x9fe8ff));
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 1.0, 6), mat(0xdddddd));
  mast.position.set(0.1, deckY + 0.9, 0);
  g.add(mast);
  const boom = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 1.1, 6), mat(0xdddddd));
  boom.rotation.z = 1.0;
  boom.position.set(-0.35, deckY + 0.75, 0);
  g.add(boom);
  // 부표·그물 더미
  g.add(box(0.5, 0.12, 0.45, mat(0x2e8b57, 0.9), -0.6, deckY));
  for (let i = 0; i < 4; i++) {
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), mat(0xff8c1a, 0.5));
    b.position.set(-0.85 + i * 0.12, deckY + 0.16, 0.18);
    g.add(b);
  }
  navLights(g, L, B, deckY + 1.4, 0.1);
  const wake = addWake(g, L, B);
  return { group: g, length: L, beam: B, wake, label: "FISHING" };
}

export function createVessel(kind: VesselKind, seed = 0): Vessel {
  switch (kind) {
    case "container":
      return containerShip(seed);
    case "tanker":
      return tanker();
    case "ferry":
      return ferry();
    case "carCarrier":
      return carCarrier();
    case "tug":
      return tug();
    case "fishing":
      return fishing();
  }
}

// VTS 화면 같은 선박 이름표 (스프라이트)
export function createLabel(text: string, speed: number) {
  const c = document.createElement("canvas");
  c.width = 320;
  c.height = 72;
  const g = c.getContext("2d")!;
  g.fillStyle = "rgba(4,18,30,0.78)";
  g.beginPath();
  g.roundRect(2, 2, 316, 68, 12);
  g.fill();
  g.strokeStyle = "rgba(61,242,196,0.9)";
  g.lineWidth = 3;
  g.stroke();
  g.fillStyle = "#3df2c4";
  g.font = "bold 30px ui-monospace, Menlo, Consolas, monospace";
  g.textBaseline = "middle";
  g.fillText(text, 18, 37);
  g.fillStyle = "#e8fbff";
  g.textAlign = "right";
  g.fillText(`${speed.toFixed(1)} kn`, 302, 37);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, depthTest: true, sizeAttenuation: false }));
  sp.renderOrder = 5;
  return sp;
}
