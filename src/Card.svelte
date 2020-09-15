<script>
    import axios from "axios";
    import {onMount, beforeUpdate} from "svelte";
    import {currentMonth, currentDay} from "./utils/date";
    import {contriesInfo} from "./store/stores";
    import {getContext} from "svelte";
    import Form3 from "./Form3.svelte";
    import Loader from "./Loader.svelte";
    import Button from "./Button.svelte";
    export let countryInfo;
    export let colorIndex;
    let isLoading = true;
    let getCountryInfo = getData();

    const {open} = getContext("simple-modal");

    const showForm = () => {
        // console.log(countryInfo);
        open(Form3, {
            countryName: countryInfo.Country || "",
            city: countryInfo.City || "",
            code: countryInfo.CountryCode || "",
            province: countryInfo.province || "",
            lat: countryInfo.Lat || "",
            lon:countryInfo.Lon || "",
            cases: countryInfo.Cases || "",
            status: countryInfo.Status || "",
            contentClass: "md:max-w-630 w-full"
        });
    };

    const handleRetry = () => (getCountryInfo = getData());

    const setTopBarColor = index => `color-line-${index}`;
    const shouldStopLoading = () => {
        if (isLoading && $contriesInfo && $contriesInfo[countryInfo.Slug]) {
            isLoading = false;
        }
    };
    async function getData() {
        if (!isLoading) isLoading = true;
        const response = await axios.get(
            `country/${
                countryInfo.Slug
            }/status/confirmed?from=2020-09-01T00:00:00Z&to=2020-${currentMonth()}-${currentDay()}T00:00:00Z`
        );
        if (response && response.data) {
            console.log(response.data)
            contriesInfo.setCountry(countryInfo.Slug, response.data);
            return response.data;
        }
        throw new Error("try again");
    }

    beforeUpdate(shouldStopLoading);
</script>

<style>
    .background-color-card {
        background: #252b43;
    }
    .color-name-of-country {
        color: #929cc0;
    }
    .color-line-0 {
        background: #f5bf72;
    }
    .color-line-1 {
        background: #e4578f;
    }
    .color-line-2 {
        background: #efa27c;
    }
    .color-line-3 {
        background: #c30328;
    }
</style>

<div
    class={`${isLoading ? 'flex justify-center items-center' : ''} min-h-180 lg:max-w-400 rounded overflow-hidden shadow-lg background-color-card cursor-pointer mb-8 mr-4 hover:bg-blue-600`}
    on:click={!isLoading && showForm}>
    <div class={`${setTopBarColor(colorIndex)} h-1`} />
    {#await getCountryInfo}
        <Loader />
    {:then _}
        <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl p-6 color-name-of-country">
                <p class="truncate">{countryInfo.Country}</p>
            </div>
            <p class="text-4xl pb-6">
                {$contriesInfo[countryInfo.Slug] && $contriesInfo[countryInfo.Slug].Cases}
            </p>
        </div>
    {:catch e}
        <Button click={handleRetry}>Try again</Button>
    {/await}
</div>
