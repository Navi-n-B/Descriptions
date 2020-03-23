import * as Ionicon from 'react-icons/io';

export function getIonicon(icon,) {
  let foundIcon = Ionicon[icon];
  foundIcon = foundIcon || Ionicon['IoIosCode'];
  // foundIcon.size = size;
  return foundIcon;
};
export function convertToClass(icon) {
  return icon.replace(/\s+/g, '-').toLowerCase();
};

export default {
  getIonicon,
  convertToClass,

}