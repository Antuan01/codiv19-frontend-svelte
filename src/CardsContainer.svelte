<script>
    import { countries, countriesSelectedRandomly } from './store/stores';    
    import axios from "axios";
    import { onMount } from 'svelte';


    function getCountries(){  
    	axios.get(`countries`)
        	.then(res => {
				console.log(res, $countries)
				countries.set(res.data)
				console.log($countries, $countriesSelectedRandomly, "countries")
			})
        	.catch(err => console.log(err));
    }

    onMount(() => {
        getCountries()
    });

</script>

<style>

</style>


