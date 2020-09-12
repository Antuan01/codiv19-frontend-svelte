import { writable, readable, derived } from 'svelte/store';
import { getRandomInt } from '../utils/functions';

export const countries = writable([]);

export const countriesSelectedRandomly = derived(
    countries,
    $countries => {
        const rand = getRandomInt($countries.length - 5)
        return $countries.slice(rand, rand + 4)
    }
);