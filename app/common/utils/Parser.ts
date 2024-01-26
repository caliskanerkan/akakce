export const nextURLParser = (url: string | null) => {
  if (!url) return url;
  const code = url.split("/").at(-1);
  return code;
};
