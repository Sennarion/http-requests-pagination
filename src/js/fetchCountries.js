const BASE_URL = 'https://restcountries.com/v3.1/name/';

export const fetchCountries = name => {
  return fetch(
    `${BASE_URL}${name}?fields=name,capital,population,flags,languages`
  ).then(data => {
    if (!data.ok) {
      throw new Error(
        `Oops, there is no country with that name. Error status - ${data.status}`
      );
    }
    return data.json();
  });
};
