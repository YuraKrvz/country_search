
export const BASE_URL = 'https://restcountries.com/v3.1/'

export const ALL_COUNTRIES = BASE_URL + 'all';
export const ALL_COUNTRIES_SPECIFIC = BASE_URL + 'all?fields=name,capital,flags,population,region';

export const searchCountry = (name)=> BASE_URL + 'name/' + name;

export const searchCountryOfCode = code => BASE_URL + code;