// Configuration options for Next.js

// const runtimeCaching = require("next-pwa/cache.js");

// Configuration object tells the next-pwa plugin
module.exports = require("next-pwa")({
  dest: "public", // Destination directory for the PWA files
  register: true, // Register the PWA service worker
  // runtimeCaching,
});
