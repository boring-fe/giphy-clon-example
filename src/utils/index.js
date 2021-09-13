export const parseQuerySearch = (str) => {
  const y = new URLSearchParams(str);
  const params = new Map();
  for (let p of y) {
    console.log(p);
    params.set(p[0], p[1]);
  }

  return params;
};