import { ConversionSettings } from '../types';

/**
 * Converts a WebP, JPEG, or JPG image to PNG with specified settings
 */
export const convertImage = async (
  file: File,
  settings: ConversionSettings
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        try {
          // Create canvas with same dimensions as image
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          
          // Draw image to canvas
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Could not get canvas context'));
            return;
          }
          
          // Draw with white background to handle transparency
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
          
          // Convert to PNG with quality setting
          // Note: For PNG, quality doesn't directly apply, but we'll use it
          // for future enhancements or if we add other formats
          let quality = settings.losslessMode ? 1.0 : settings.compression;
          
          // Get data URL (PNG)
          const dataUrl = canvas.toDataURL('image/png', quality);
          resolve(dataUrl);
        } catch (error) {
          reject(error);
        }
      };
      
      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };
      
      if (event.target?.result) {
        img.src = event.target.result as string;
      } else {
        reject(new Error('Failed to read file'));
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    
    reader.readAsDataURL(file);
  });
};

/**
 * Calculate file size in KB/MB
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) {
    return bytes + ' B';
  } else if (bytes < 1024 * 1024) {
    return (bytes / 1024).toFixed(2) + ' KB';
  } else {
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  }
};