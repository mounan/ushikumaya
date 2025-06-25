// Utility function to get the correct image path for both development and production
const getImagePath = (imagePath) => {
  // Remove leading slash if present
  let cleanPath = imagePath;
  if (cleanPath.startsWith('/')) {
    cleanPath = cleanPath.slice(1);
  }
  
  // Remove base path if already present to avoid duplication
  if (cleanPath.startsWith('ushikumaya/')) {
    cleanPath = cleanPath.replace('ushikumaya/', '');
  }
  
  // Always use BASE_URL for consistent path handling
  // Vite handles this correctly in both dev and production
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

export default getImagePath; 