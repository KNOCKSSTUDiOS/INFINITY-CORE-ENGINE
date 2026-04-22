import { GICinemaApp } from "../cinema-engine/GI-CINEMA-APP-L.js";

const pkg = GICinemaApp.generate("fullmovie");
// send to your pipeline, logs, or export flow
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/repo-name",
  images: { unoptimized: true }
};

module.exports = nextConfig;
basePath: "",
