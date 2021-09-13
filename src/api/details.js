import { ApiError } from './ApiError';
const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

export const getUrl = (id, limit = 40, offset = 0, apiUrl = "", apiKey = "") => {
  return `${apiUrl}/gifs/${id}?api_key=${apiKey}`;
};

export const requestDetails = async (text, limit = 40, offset = 0) => {
  const response = await fetch(getUrl(text, limit, offset, REACT_APP_API_URL, REACT_APP_API_KEY));
  if (response.status >= 400) {
    throw new ApiError(response.statusText, response.status);
  }
  const data = await response.json();
  return data;
};
