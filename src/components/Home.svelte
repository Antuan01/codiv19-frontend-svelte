<script>
    import CardsContainer from "./CardsContainer.svelte";
    import axios from "axios";

    axios.defaults.baseURL = "https://api.covid19api.com/";
</script>

<main class="w-full flex justify-center flex-wrap pb-4">
    <div class="w-9/10 pt-8 pb-6">
        <h1 class="text-2xl">Covid-19 Dashboard</h1>
        <p>from September 1, 2020 until today</p>
    </div>
    <CardsContainer />
</main>
