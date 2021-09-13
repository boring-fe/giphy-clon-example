export const getQuery = (location, key) => {
  const y = new URLSearchParams(location.search);
  return y.get(key) || null;
};

export const setToQueryParams = (location, param, value) => {
  let params = new URLSearchParams(location.search);
  params.set(param, value)
  console.log(params.toString())
  return params
}