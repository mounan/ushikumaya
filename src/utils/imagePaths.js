// Simple utility function to get the correct image path
const getImagePath = (imagePath) => {
  // Clean the path by removing leading slash
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // For Vercel deployment, use root path
  return `/${cleanPath}`;
};

export default getImagePath; 