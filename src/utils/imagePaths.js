// Simple utility function to get the correct image path
const getImagePath = (imagePath) => {
  // Clean the path by removing leading slash
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // In development, use root path
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // In production, use the base path for GitHub Pages
  return `/ushikumaya/${cleanPath}`;
};

export default getImagePath; 