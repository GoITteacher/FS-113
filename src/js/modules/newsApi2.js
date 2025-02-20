import axios from 'axios';

const API_KEY = 'c8747511a2c34730a83caaff4f3693e7';

export async function fetchArticles(query, page, perPage) {
  const BASE_URL = 'https://newsapi.org/v2';
  const END_POINT = '/everything';

  const params = {
    apiKey: API_KEY,
    q: query,
    pageSize: perPage,
    page: page,
  };

  const res = await axios.get(BASE_URL + END_POINT, { params });
  return res.data;
}
