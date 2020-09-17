<script>
    export let countryName;
    export let lat;
    export let lon;
    export let cases;
    export let status;
    export let city;
    export let code;
    export let province;
    import {getContext} from "svelte";
    import {emailV, required, stringV, numericV} from "../validation/validator";

    const {close} = getContext("simple-modal");

    let values = {
        country: {
            error: false,
            value: countryName,
            touched: false,
        },
        city: {
            error: false,
            value: city,
            touched: false,
        },
        province: {
            error: false,
            value: province,
            touched: false,
        },
        code: {
            error: false,
            value: code,
            touched: false,
        },
        lat: {
            error: false,
            value: lat,
            touched: false,
        },
        lon: {
            error: false,
            value: lon,
            touched: false,
        },
        cases: {
            error: false,
            value: cases,
            touched: false,
        },
        status: {
            error: false,
            value: status,
            touched: false,
        },
    };

    let available = true;
    $: {
    }
    const availableCheck = () => {
        available =
            Object.keys(values)
                .map(key => values[key])
                .map(el => el.error)
                .indexOf(true) === -1;
    };

    const validateCountry = () => {
        values.country.error = stringV(values.country.value);
        // values.country.touched = true
        availableCheck();
    };

    const validateCity = () => {
        values.city.error = stringV(values.city.value);
        // values.city.touched = true
        availableCheck();
    };

    const validateCode = () => {
        values.code.error = stringV(values.code.value);
        // values.name.touched = true
        availableCheck();
    };

    const validateLat = () => {
        values.lat.error = numericV(values.lat.value);
        // values.name.touched = true
        availableCheck();
    };

    const validateLon = () => {
        values.lon.error = numericV(values.lon.value);
        // values.name.touched = true
        availableCheck();
    };

    const validateProvince = () => {
        values.province.error = stringV(values.province.value);
        // values.province.touched = true
        availableCheck();
    };

    const validateCases = () => {
        values.cases.error = numericV(values.cases.value);
        // values.cases.touched = true
        availableCheck();
    };

    const validateStatus = () => {
        values.status.error = stringV(values.status.value);
        // values.status.touched = true
        availableCheck();
    };

    const submit = () => {
        console.log(
            Object.keys(values).reduce((acc, key) => {
                acc = {
                    ...acc,
                    [key]: values[key].value,
                };
                return acc;
            }, {})
        );
        close();
    };
</script>

<div class="w-full">
    <p class="px-8 text-2xl">{countryName}</p>
    <form class="px-8 pt-6 pb-8 mb-4">
        <div class="mb-6">
            <label class="block text-sm font-bold mb-2" for="country"> Country </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                    leading-tight focus:outline-none focus:shadow-outline"
                class:border-red-500={values.country.error}
                id="country"
                type="text"
                placeholder=""
                bind:value={values.country.value}
                on:blur={validateCountry}
                on:input={validateCountry} />
            {#if values.country.error}
                <p class="text-red-500">The Country is required</p>
            {/if}
        </div>

        <div class="mb-6">
            <label class="block text-sm font-bold mb-2" for="city"> City </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3
                    leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                placeholder=""
                bind:value={values.city.value}
                class:border-red-500={values.city.error}
                on:blur={validateCity}
                on:input={validateCity} />
            {#if values.city.error}
                <p class="text-red-500">The city is required</p>
            {/if}
        </div>

        <div class="mb-6">
            <label class="block text-sm font-bold mb-2" for="code"> Code </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                    leading-tight focus:outline-none focus:shadow-outline"
                id="code"
                type="text"
                placeholder=""
                bind:value={values.code.value}
                class:border-red-500={values.code.error}
                on:blur={validateCode}
                on:input={validateCode} />
            {#if values.code.error}
                <p class="text-red-500">The code is required</p>
            {/if}
        </div>

        <div class="mb-6">
            <label class="block text-sm font-bold mb-2" for="province"> Province </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3
                    leading-tight focus:outline-none focus:shadow-outline"
                id="number"
                type="text"
                min="0"
                placeholder=""
                bind:value={values.province.value}
                class:border-red-500={values.province.error}
                on:blur={validateProvince}
                on:input={validateProvince} />
            {#if values.province.error}
                <p class="text-red-500">The province field is requiered</p>
            {/if}
        </div>

        <div class="mb-6">
            <label class="block text-sm font-bold mb-2" for="lat"> Latitude </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3
                    leading-tight focus:outline-none focus:shadow-outline"
                id="number"
                type="number"
                min="0"
                placeholder=""
                bind:value={values.lat.value}
                class:border-red-500={values.lat.error}
                on:blur={validateLat}
                on:input={validateLat} />
            {#if values.lat.error}
                <p class="text-red-500">The latitude field is requiered</p>
            {/if}
        </div>

        <div class="mb-6">
            <label class="block text-sm font-bold mb-2" for="lon"> Longitude </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3
                    leading-tight focus:outline-none focus:shadow-outline"
                id="number"
                type="number"
                min="0"
                placeholder=""
                bind:value={values.lon.value}
                class:border-red-500={values.lon.error}
                on:blur={validateLon}
                on:input={validateLon} />
            {#if values.lon.error}
                <p class="text-red-500">The longitude field is requiered</p>
            {/if}
        </div>

        <div class="mb-6">
            <label class="block text-sm font-bold mb-2" for="cases"> Cases </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3
                    leading-tight focus:outline-none focus:shadow-outline"
                id="number"
                type="number"
                min="0"
                placeholder=""
                bind:value={values.cases.value}
                class:border-red-500={values.cases.error}
                on:blur={validateCases}
                on:input={validateCases} />
            {#if values.cases.error}
                <p class="text-red-500">The Cases field is requiered</p>
            {/if}
        </div>

        <div class="mb-6">
            <label class="block text-sm font-bold mb-2" for="status"> Status </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3
                    leading-tight focus:outline-none focus:shadow-outline"
                id="number"
                type="text"
                min="0"
                placeholder=""
                bind:value={values.status.value}
                class:border-red-500={values.status.error}
                on:blur={validateStatus}
                on:input={validateStatus} />
            {#if values.status.error}
                <p class="text-red-500">The status field is requiered</p>
            {/if}
        </div>

        <div class="flex justify-center">
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
                    focus:outline-none focus:shadow-outline"
                type="button"
                class:disable={!available}
                disabled={!available}
                class:cursor-not-allowed={!available}
                on:click={submit}>
                Submit
            </button>
        </div>
    </form>

    <p class="text-center text-gray-500 text-xs">&copy;2020 Codiv Corp. All rights reserved.</p>
</div>
