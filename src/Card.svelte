<script>

  import axios from "axios";
  import { onMount } from 'svelte';
  import {currentMonth, currentDay} from './utils/date';
  import {contriesInfo} from './store/stores';
  import { getContext } from 'svelte';
  import Form from './Form.svelte'
  import Form3 from './Form3.svelte'

  export let countryInfo;

  const { open } = getContext('simple-modal');

  const showForm = () => {
        open(Form3);
    };
  
  function getData() {

    axios.get(`country/${countryInfo.Slug}/status/confirmed?from=2020-09-01T00:00:00Z&to=2020-${currentMonth()}-${currentDay()}T00:00:00Z`)
    // let data = axios.get(`country/spain/status/confirmed/live?from=2020-09-01T00:00:00Z&to=2020-${currentMonth()}-${currentDay()}T00:00:00Z`)
      .then(res => {
            console.log(res.data)
            contriesInfo.setCountry(countryInfo.Slug,res.data)
          })
      .catch(err => console.log(err));
  }

  onMount(() => {
    getData()
  });

  $:{
    console.log(countryInfo.Slug, $contriesInfo[countryInfo.Slug], open)
  }


</script>

<style>
 .background-color-card{
   background: #252B43
 }
 .color-name-of-country{
  color: #929CC0
 }
</style>

<div class="lg:max-w-400 rounded overflow-hidden shadow-lg background-color-card cursor-pointer mb-8 mr-4 hover:bg-blue-600"
on:click={showForm}
>
<div class="px-6 py-4 text-center">
  <div class="font-bold text-xl p-6 color-name-of-country">
    <p class="truncate">{countryInfo.Country}</p>
</div>
  <p class="text-4xl pb-6">
    {$contriesInfo[countryInfo.Slug] && $contriesInfo[countryInfo.Slug].Cases }
  </p>
 
</div>

</div>
