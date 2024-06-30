const BASE_URL = 'https://api.tvmaze.com';

const apiget = async querystr => {
  const resp = await fetch(`${BASE_URL}${querystr}`);
  const body = await resp.json();
  return body;
};

export const searchShows = query => apiget(`/search/shows?q=${query}`);
export const searchForPeople = query => apiget(`/search/people?q=${query}`);
export const getShowById = showid =>
  apiget(`/shows/${showid}?embed[]=seasons&embed[]=cast`);

export const getShowByIds = async showIds => {
  const promises = showIds.map(showId => apiget(`/shows/${showId}`));

  const result = await Promise.all(promises);

  return result;
};
