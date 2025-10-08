// Get the base path from Vite's import.meta.env.BASE_URL
// This is automatically set based on the 'base' config in vite.config.js
export const BASE_PATH = import.meta.env.BASE_URL;

// Helper to construct full URLs
export const getFullUrl = (path) => {
  const origin = window.location.origin;
  // Remove trailing slash from BASE_PATH and leading slash from path to avoid double slashes
  const basePath = BASE_PATH.endsWith('/') ? BASE_PATH.slice(0, -1) : BASE_PATH;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${origin}${basePath}${cleanPath}`;
};
