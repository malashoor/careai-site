// node scripts/sync-assets.mjs ../CareAI-flutter/Flutter_app
import fs from "node:fs";
import path from "node:path";

const [, , FLUTTER_ROOT = "../CareAI-Flutter/flutter_app"] = process.argv;

const MAP = [
  { from: "assets", to: "public/images" },
  // Copy specific icon directories
  { from: "assets/dashboard_icons", to: "public/images/dashboard_icons" },
  { from: "assets/emergency_icons", to: "public/images/emergency_icons" },
  { from: "assets/feature_icons", to: "public/images/feature_icons" },
  { from: "assets/health_icons", to: "public/images/health_icons" },
  { from: "assets/medication_icons", to: "public/images/medication_icons" },
  { from: "assets/profile_images", to: "public/images/profile_images" },
];

// Utility
const copyDir = (src, dest) => {
  if (!fs.existsSync(src)) return false;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src)) {
    const s = path.join(src, entry);
    const d = path.join(dest, entry);
    const stat = fs.statSync(s);
    if (stat.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
  return true;
};

// run
for (const m of MAP) {
  const src = path.resolve(FLUTTER_ROOT, m.from);
  const dest = path.resolve(process.cwd(), m.to);
  const ok = copyDir(src, dest);
  if (!ok && !m.optional) {
    console.warn(`[warn] Missing: ${src}`);
    // On Netlify, create empty directories to prevent build failures
    if (process.env.NETLIFY) {
      fs.mkdirSync(dest, { recursive: true });
      console.log(`[info] Created empty directory for Netlify: ${dest}`);
    }
  } else if (ok) {
    console.log(`[ok] Copied ${src} -> ${dest}`);
  }
}

// Pick an app icon to use as the site favicon/app-icons.
// Adjust the source path below if your master icon lives elsewhere.
const iconCandidates = [
  path.resolve(FLUTTER_ROOT, "assets/icon/app_icon.png"),
  path.resolve(FLUTTER_ROOT, "assets/images/app_icon.png"),
];
const iconDest = path.resolve(process.cwd(), "public/icons/app_icon.png");
fs.mkdirSync(path.dirname(iconDest), { recursive: true });
for (const c of iconCandidates) {
  if (fs.existsSync(c)) {
    fs.copyFileSync(c, iconDest);
    console.log(`[ok] Copied app icon: ${c} -> ${iconDest}`);
    break;
  }
}
