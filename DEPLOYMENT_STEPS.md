# hollywoodimaging.studio — INFINITY-CORE-ENGINE Deployment (GitHub Pages)

## 1. Clone your repo

git clone git@github.com:KNOCKSSTUDiOS-labs/INFINITY-CORE-ENGINE.git
cd INFINITY-CORE-ENGINE

## 2. Project structure (inside INFINITY-CORE-ENGINE)

Required items in the root:

- app/
- public/
- package.json
- next.config.js
- tsconfig.json

If app/, public/, or config files are elsewhere, move them into this folder.

## 3. next.config.js

Create or replace this file in the root:

next.config.js
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
