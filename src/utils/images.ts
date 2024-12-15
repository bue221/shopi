export const cleanImagePath = (image: string) => {
  return image.replace("]", "").replace("[", "").replace(/"/g, "");
};
