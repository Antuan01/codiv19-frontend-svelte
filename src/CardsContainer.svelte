<script>
    import { countries, countriesSelectedRandomly } from './store/stores';    
    import axios from "axios";
    import { onMount } from 'svelte';
	import Card from './Card.svelte';


    function getCountries(){  
    	axios.get(`countries`)
        	.then(res => {
				countries.set(res.data)
				console.log($countriesSelectedRandomly, "countries")
			})
        	.catch(err => console.log(err));
    }

    onMount(() => {
        getCountries()
    });

</script>

<style>

</style>
<div class="flex flex-wrap justify-between">
{#each $countriesSelectedRandomly as countryInfo}
		<Card countryInfo={countryInfo} />
	{/each}
</div>


