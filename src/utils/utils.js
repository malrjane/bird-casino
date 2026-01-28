import imagesData from '../json/images.json';

export const getImage = (key) => {
  const image = imagesData[key];
  if (!image) return { src: '', alt: '' };

   const isGitHubPages = window.location.hostname.includes('github.io');
  
   const processedSrc = (isGitHubPages && image.src.startsWith('/')) 
    ? `.${image.src}` 
    : image.src;

  return {
    ...image,
    src: processedSrc
  };
};