<script>
    import {countries, countriesSelectedRandomly} from "./store/stores";
    import axios from "axios";
    import Card from "./Card.svelte";
    import Button from "./Button.svelte";
    import Loader from "./Loader.svelte";
    import DashboardContainer from "./DashboardContainer.svelte";
    let countriesReceived = getCountries();
    const retryGetCountries = () => (countriesReceived = getCountries());
    async function getCountries() {
        const response = await axios.get(`countries`);
        if (response && response.data) {
            countries.set(response.data);
            return response.data;
        }
        throw new Error("try again");
    }
</script>

{#await countriesReceived}
    <DashboardContainer>
        <Loader />
    </DashboardContainer>
{:then _}
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-9/10">
        {#each $countriesSelectedRandomly as countryInfo, i}
            <Card {countryInfo} colorIndex={i > 3 ? i - 4 : i} />
        {/each}
    </div>
{:catch e}
    <DashboardContainer>
        <Button click={retryGetCountries}>Try again</Button>
    </DashboardContainer>
{/await}
