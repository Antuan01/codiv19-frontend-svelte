<script>
    import Button from "./Button.svelte";
    export let countryName;
</script>

<div class="w-full">
    <p class="px-8 text-2xl">{countryName}</p>
    <form class="px-8 pt-6 pb-8 mb-4">
        <div class="mb-6">
            <label class="block text-sm font-bold mb-2" for="confirmed"> Confirmed </label>
            <input
                class="text-black shadow appearance-none border rounded w-full py-2 px-3 leading-tight
                    focus:outline-none focus:shadow-outline"
                id="confirmed"
                type="number"
                placeholder="" />
        </div>
        <div class="mb-6">
            <label class="block text-sm font-bold mb-2" for="deaths"> Deaths </label>
            <input
                class="text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3
                    leading-tight focus:outline-none focus:shadow-outline"
                id="deaths"
                type="number"
                placeholder="" />
        </div>
        <div class="mb-6">
            <label class="block text-sm font-bold mb-2" for="recovered"> Recovered </label>
            <input
                class="text-black shadow appearance-none border rounded w-full py-2 px-3 leading-tight
                    focus:outline-none focus:shadow-outline"
                id="recovered"
                type="number"
                placeholder="" />
        </div>
        <div class="mb-6">
            <label class="block text-sm font-bold mb-2" for="actives"> Actives </label>
            <input
                class="text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3
                    leading-tight focus:outline-none focus:shadow-outline"
                id="actives"
                type="number"
                placeholder="" />
        </div>
        <div class="flex items-center justify-between">
            <Button>Submit</Button>
        </div>
    </form>
    <p class="text-center text-gray-500 text-xs">&copy;2020 Codiv Corp. All rights reserved.</p>
</div>
