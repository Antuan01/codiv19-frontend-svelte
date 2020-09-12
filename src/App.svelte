<script>
	import Card from "./Card.svelte";
	export let name;
	import axios from 'axios'
	import CardsContainer from "./CardsContainer.svelte";
	axios.defaults.baseURL = 'https://api.covid19api.com/';
</script>

<main>
	<CardsContainer />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>