<script>
    import Button from "./Button.svelte";
    import {contriesInfo} from "./store/stores";
    export let slug;
</script>

<div class="w-full max-w-xs">
    <p class="px-8 text-2xl">{$contriesInfo[slug] && $contriesInfo[slug].Country}</p>
    <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="confirmed"> Confirmed </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                    focus:outline-none focus:shadow-outline"
                id="confirmed"
                type="number"
                placeholder="" />
        </div>
        <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="deaths"> Deaths </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3
                    leading-tight focus:outline-none focus:shadow-outline"
                id="deaths"
                type="number"
                placeholder="" />
        </div>
        <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="recovered"> Recovered </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                    focus:outline-none focus:shadow-outline"
                id="recovered"
                type="number"
                placeholder="" />
        </div>
        <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="actives"> Actives </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3
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
