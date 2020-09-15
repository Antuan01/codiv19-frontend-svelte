import { writable, readable, derived } from 'svelte/store';
import { getRandomInt } from '../utils/functions';
import { countryInfoWithTotalCases } from '../utils/handleData'

// handle countries 
export const countries = writable([]);

export const countriesSelectedRandomly = derived(
    countries,
    $countries => {
        const rand = getRandomInt($countries.length - 5)
        return $countries.slice(rand, rand + 8)
    }
);
//handle single countries
function createCountryInfo() {
    const { subscribe, set, update } = writable(0);

    return {
        subscribe,
        setCountry: (countrySlug, countryData) => update(info => {
            return {
                ...info,
                [countrySlug]: {
                    ...countryInfoWithTotalCases(countryData),
                    ...countryData[0]
                }
            }
        }),
    };
}



export const contriesInfo = createCountryInfo();