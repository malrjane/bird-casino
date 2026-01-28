 import imagesData from '../json/images.json';

/**
  * @param {string} key  
 * @returns {object}  
 */
export const getImage = (key) => {
  const image = imagesData[key];
 
  return image;
};