<script>
    import CardsContainer from "./CardsContainer.svelte";
    import axios from 'axios';

    axios.defaults.baseURL = 'https://api.covid19api.com/';
</script>

<CardsContainer/>
