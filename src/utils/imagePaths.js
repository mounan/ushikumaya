// Utility function to get the correct image path
export const getImagePath = (imagePath) => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // In development, use the path as-is
  // In production, Vite will automatically prepend the base path
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // For production, let Vite handle the base path
  return `/${cleanPath}`;
};

// Alternative approach using import.meta.env.BASE_URL
export const getImagePathWithBase = (imagePath) => {
  // Remove leading slash and base path if already present
  let cleanPath = imagePath;
  if (cleanPath.startsWith('/ushikumaya/')) {
    cleanPath = cleanPath.replace('/ushikumaya/', '');
  }
  if (cleanPath.startsWith('/')) {
    cleanPath = cleanPath.slice(1);
  }
  
  // Use Vite's BASE_URL for consistent path handling
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

// Export the preferred method
export default getImagePathWithBase; 