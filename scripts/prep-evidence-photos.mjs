import sharp from "sharp";
import path from "node:path";

const SRC_DIR = path.resolve("private-source-docs/original-photos");
const OUT_DIR = path.resolve("public/images/evidence");

const jobs = [
  ["2022_gobt_group_photo_busan.jpg", "gobt-group-2022.jpg"],
  ["2022_gobt_certificate_ceremony.jpg", "gobt-certificate-2022.jpg"],
  ["2022_gobt_plaque_presentation.jpg", "gobt-plaque-2022.jpg"],
  ["2017_worktv_vts_broadcast.jpeg", "worktv-broadcast-2017.jpg"],
  ["2011_kimft_facility_event.jpg", "kimft-opening-2011.jpg"],
  [
    "2022_mof_safety_advisory_appointment_01.jpg",
    "mof-advisory-appointment-2022-01.jpg",
  ],
  [
    "2022_mof_safety_advisory_appointment_02.jpg",
    "mof-advisory-appointment-2022-02.jpg",
  ],
  [
    "2026_passenger_ship_vr_training_lecture_jang_unkyu.jpg",
    "passenger-ship-vr-lecture-2026.jpg",
  ],
  [
    "2026_passenger_ship_vr_evacuation_training_trainee.jpg",
    "passenger-ship-vr-training-2026.jpg",
  ],
  [
    "2026_passenger_ship_inclination_trainer_kimft.jpg",
    "passenger-ship-incline-trainer-2026.jpg",
  ],
  [
    "2016_iala_secretary_general_korea_delegation.jpg",
    "iala-secretary-general-korea-delegation-2016.jpg",
  ],
];

for (const [srcName, outName] of jobs) {
  const srcPath = path.join(SRC_DIR, srcName);
  const outPath = path.join(OUT_DIR, outName);
  const before = (await sharp(srcPath).metadata()).size ?? 0;
  await sharp(srcPath)
    .rotate()
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(outPath);
  const after = (await sharp(outPath).metadata()).size ?? 0;
  console.log(`${srcName} -> ${outName}`);
}
