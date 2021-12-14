
export const BASE_URL = 'https://restcountries.com/v3.1/'

export const ALL_COUNTRIES = BASE_URL + 'all';
export const ALL_COUNTRIES_SPECIFIC = BASE_URL + 'all?fields=name,capital,flags,population,region';

export const searchCountry = (name)=> BASE_URL + 'name/' + name;

export const searchOfCodeCountry = (code) => 'https://restcountries.com/v3.1/alpha/' + code;

export const filterByCode = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',');