// 첫 화면(히어로) 3D 장면.
// 해 질 녘 바다 위 둥근 부두에 '머리 큰' 장은규 교수 캐릭터가 서 있고, 뒤로 VTS 레이더 마스트가 돌며,
// 레이더 원 안에서 선박들이 표적 고리를 달고 지나간다. 마우스를 따라 고개를 돌리고, 누르면 손을 흔들며 뛴다.
// 화면 밖이거나 탭이 숨으면 그리기를 멈춘다. 모든 도형은 코드로 만든다(외부 모델·텍스처 파일 없음).
import * as THREE from "three";
import { createVessel, createLabel, type VesselKind, type Vessel } from "./ships";
import { createSky, createSea, createRadarTower, createHarbor, createDockProps, MAX_TARGETS } from "./environment";

export type HeroScene = { dispose: () => void; wave: () => void };

type Opts = {
  mobile: boolean;
  reducedMotion: boolean;
  onCharacterScreenPos?: (x: number, y: number) => void;
  onWave?: () => void;
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
  scene.fog = new THREE.Fog(0x1a2d42, 30, 125);
  const camera = new THREE.PerspectiveCamera(mobile ? 40 : 32, W() / H(), 0.1, 400);

  // 캐릭터 위치: 데스크톱은 오른쪽, 휴대폰은 가운데
  const focus = mobile ? new THREE.Vector3(0, 1.3, 0) : new THREE.Vector3(2.6, 1.4, 0);
  const camBase = mobile ? new THREE.Vector3(0, 2.6, 10.5) : new THREE.Vector3(0.6, 3.0, 12.5);
  camera.position.copy(camBase);
  const lookTarget = mobile ? new THREE.Vector3(0.3, 1.45, 0) : new THREE.Vector3(1.2, 1.6, 0);
  camera.lookAt(lookTarget);

  // 해는 왼쪽 뒤 수평선 가까이 (노을)
  const sunDir = new THREE.Vector3(-0.55, 0.07, -0.83).normalize();
  const sky = createSky(sunDir);
  scene.add(sky);

  // 빛: 노을빛 주광 + 하늘빛 + 청록 테두리빛
  scene.add(new THREE.HemisphereLight(0xbcd9ff, 0x0b2238, 1.0));
  const sun = new THREE.DirectionalLight(0xffd2a8, 2.4);
  sun.position.set(-6, 7, 7);
  sun.castShadow = !mobile;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = -4;
  sun.shadow.camera.right = 6;
  sun.shadow.camera.top = 5;
  sun.shadow.camera.bottom = -3;
  sun.target.position.copy(focus);
  scene.add(sun, sun.target);
  const back = new THREE.DirectionalLight(0xff9a5c, 1.2);
  back.position.set(-10, 3, -20);
  scene.add(back);
  const rimLight = new THREE.PointLight(C.accent, 14, 14);
  rimLight.position.set(focus.x + 2.5, 3, -1.5);
  scene.add(rimLight);
  const fill = new THREE.PointLight(0xffb37a, 6, 10);
  fill.position.set(focus.x - 2, 2, 3);
  scene.add(fill);

  // VTS 레이더 타워 (캐릭터 오른쪽 뒤 바위섬)
  const towerPos = mobile ? new THREE.Vector3(2.6, -0.15, -4.2) : new THREE.Vector3(focus.x + 3.6, -0.15, -4.4);
  const tower = createRadarTower();
  tower.group.position.copy(towerPos);
  tower.group.scale.setScalar(mobile ? 0.62 : 0.72);
  scene.add(tower.group);

  // 바다 (수면에 레이더 화면을 그린다)
  const radarR = mobile ? 11 : 16;
  const { sea, uniforms: seaU } = createSea(sunDir, mobile, new THREE.Vector2(towerPos.x, towerPos.z), radarR);
  scene.add(sea);

  // 먼 항만
  const harbor = createHarbor(mobile);
  scene.add(harbor.group);

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
  dock.add(createDockProps());

  // 선박: 항로마다 한 척. [종류, z, 방향, 속도, 시작 x, 이름표]
  type Lane = [VesselKind, number, 1 | -1, number, number, boolean];
  const lanesDesk: Lane[] = [
    ["tug", -5.0, 1, 1.1, -10, true],
    ["ferry", -7.3, -1, 1.25, 9, true],
    ["container", -10.3, 1, 0.85, -3, true],
    ["fishing", -13.0, 1, 0.55, 9, true],
    ["tanker", -15.7, -1, 0.7, 2, true],
    ["fishing", -18.3, -1, 0.5, -12, false],
    ["carCarrier", -21.2, 1, 0.8, -15, true],
    ["container", -25.5, -1, 0.7, 6, false],
    ["container", -31, 1, 0.65, -20, false],
  ];
  const lanesMob: Lane[] = [
    ["ferry", -9.5, -1, 0.9, 6, false],
    ["container", -13, 1, 0.7, -3, false],
    ["fishing", -16.5, -1, 0.45, 2, false],
    ["tanker", -20, 1, 0.55, -8, false],
    ["carCarrier", -25, -1, 0.6, 9, false],
  ];
  const lanes = mobile ? lanesMob : lanesDesk;
  const wrap = mobile ? 15 : 26;
  type Ship = { v: Vessel; kind: VesselKind; x: number; z: number; dir: 1 | -1; speed: number; bob: number; label?: THREE.Sprite };
  const ships: Ship[] = lanes.map(([kind, z, dir, speed, x0, labeled], i) => {
    const v = createVessel(kind, i);
    v.group.rotation.y = dir > 0 ? 0 : Math.PI;
    v.wake.uniforms.uSpeed.value = speed;
    scene.add(v.group);
    const s: Ship = { v, kind, x: x0, z, dir, speed, bob: i * 1.7 };
    if (labeled) {
      s.label = createLabel(v.label, speed * 12.5);
      s.label.scale.set(0.094, 0.0212, 1);
      scene.add(s.label);
    }
    return s;
  });
  seaU.uTargetN.value = Math.min(ships.length, MAX_TARGETS);

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
  let nextAutoWave = 14;
  const startWave = () => {
    waveT = 2.4;
    jumpT = 0.7;
    opts.onWave?.();
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

    seaU.uTime.value = t;
    if (!reducedMotion && t > nextAutoWave) {
      nextAutoWave = t + 14;
      startWave();
    }
    sky.position.copy(camera.position);
    // 레이더: 안테나 회전(약 20rpm)과 수면 레이더의 쓸기 각도를 맞춘다
    const sweep = t * 2.1;
    seaU.uSweep.value = sweep;
    tower.head.rotation.y = Math.PI / 2 - sweep;
    const flash = Math.sin(t * 3.2) > 0.75 ? 1 : 0;
    (tower.beacon.material as THREE.MeshBasicMaterial).color.setRGB(0.35 + 0.65 * flash, 0.05, 0.05);
    tower.beaconLight.intensity = flash * 2.5;
    harbor.craneLights.forEach((l, i) => (l.material as THREE.MeshBasicMaterial).color.setRGB(Math.sin(t * 2 + i) > 0.2 ? 1 : 0.25, 0.12, 0.12));

    // 선박 이동 + 레이더 표적
    ships.forEach((s, i) => {
      s.x += s.speed * dt * s.dir;
      const lim = wrap + s.v.length / 2;
      if (s.x > lim) s.x = -lim;
      if (s.x < -lim) s.x = lim;
      const y = -0.3 + Math.sin(t * 1.2 + s.bob) * 0.03;
      s.v.group.position.set(s.x, y, s.z);
      s.v.group.rotation.x = Math.sin(t * 0.9 + s.bob) * 0.02;
      s.v.group.rotation.z = Math.sin(t * 0.7 + s.bob * 2) * 0.012;
      s.v.wake.uniforms.uTime.value = t;
      if (i < MAX_TARGETS) {
        const bearing = Math.atan2(s.z - towerPos.z, s.x - towerPos.x);
        const behind = (((sweep - bearing) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        seaU.uTargets.value[i].set(s.x, s.z, s.v.length * 0.5 + 0.35, Math.exp(-behind * 1.1));
        seaU.uHeading.value[i].set(s.dir, 0);
      }
      if (s.label) {
        s.label.position.set(s.x, y + (s.kind === "tug" || s.kind === "fishing" ? 1.9 : 2.9), s.z);
        // 왼쪽 글자 영역(화면 왼쪽 절반)과 화면 끝에서는 이름표를 숨긴다
        tmp.copy(s.label.position).project(camera);
        const op = THREE.MathUtils.clamp((tmp.x - 0.02) * 6, 0, 1) * THREE.MathUtils.clamp((0.95 - tmp.x) * 8, 0, 1);
        (s.label.material as THREE.SpriteMaterial).opacity = op;
        s.label.visible = op > 0.01;
      }
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
    const eyeBlink = (t % 4.2) < 0.12 ? 0.35 : 1;
    prof.eyes.forEach((e) => e.scale.set(1, eyeBlink, 1));

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
