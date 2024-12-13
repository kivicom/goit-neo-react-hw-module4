import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const searchPhotos = async (filter, page) => {
  const { data } = await axios('/search/photos', {
    params: {
      query: filter,
      page: page,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID 5Mc3Yjsv9ixWfACCDibcdLwOVzxWOfdVUQJ1LyDWRHI`,
      'Accept-Version': 'v1',
    },
  });
  return data;
};
