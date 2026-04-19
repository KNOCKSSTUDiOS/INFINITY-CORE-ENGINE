// PIPELINE CONFIG · INFINITY-CORE-ENGINE
// Centralized config for render pipeline + backend endpoints.
// When you connect your Node backend, update the URLs here.

window.INFINITY_PIPELINE_CONFIG = {
  backend: {
    // Replace with your backend URL when ready:
    // baseUrl: "https://your-backend.com",
    baseUrl: null, // null = offline simulation mode
  },

  endpoints: {
    addJob: "/api/jobs",
    jobStatus: "/api/jobs/", // + jobId
    billingSession: "/api/billing/session",
    clientRenders: "/api/client/renders",
  },

  render: {
    defaultPreset: "cinematic",
    quality: "high",
    version: "1.0.0",
  },

  credits: {
    enabled: true,
    costPerRender: 1,
  },

  meta: {
    engine: "INFINITY-CORE-ENGINE",
    mode: "FULL PRODUCTION",
    author: "KNOCKSSTUDiOS",
  },
};

console.log(
  "%cPIPELINE CONFIG LOADED",
  "color:#ffe66b;font-weight:bold;font-size:12px;"
);
