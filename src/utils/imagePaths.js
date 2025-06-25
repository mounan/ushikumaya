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
  
  // In development, Vite serves public files at the root despite base config
  // In production, use the configured base path
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  } else {
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  }
};

export default getImagePath; 