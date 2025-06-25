// Simple utility function to get the correct image path
const getImagePath = (imagePath) => {
  // Clean the path by removing leading slash
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // Always use the BASE_URL which Vite handles correctly
  // In dev: BASE_URL = "/ushikumaya/" 
  // In prod: BASE_URL = "/ushikumaya/"
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

export default getImagePath; 