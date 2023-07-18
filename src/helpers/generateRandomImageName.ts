export const randomImageName = (imageName: string, extension: string) => {
  const randomString = crypto.randomUUID();
  return `${imageName}-${randomString}.${extension}`;
};
