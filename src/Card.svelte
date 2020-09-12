<script>

  import axios from "axios";
  import { onMount } from 'svelte';
  import {currentMonth, currentDay} from './utils/date';
  import {contriesInfo} from './store/stores';

  export let countryInfo;
  
  function getData() {

    axios.get(`country/${countryInfo.Slug}/status/confirmed?from=2020-09-01T00:00:00Z&to=2020-${currentMonth()}-${currentDay()}T00:00:00Z`)
    // let data = axios.get(`country/spain/status/confirmed/live?from=2020-09-01T00:00:00Z&to=2020-${currentMonth()}-${currentDay()}T00:00:00Z`)
      .then(res => {
            contriesInfo.setCountry(countryInfo.Slug,res.data)
          })
      .catch(err => console.log(err));
  }

  onMount(() => {
    getData()
  });

  $:{
    console.log(countryInfo.Slug, $contriesInfo[countryInfo.Slug])
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

<div class="max-w-sm rounded overflow-hidden shadow-lg background-color-card">
<!-- <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> -->
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2 color-name-of-country">{countryInfo.Country}</div>
  <p class="text-white text-base">
    {$contriesInfo[countryInfo.Slug] && $contriesInfo[countryInfo.Slug].Cases }
  </p>
 
</div>
<div class="px-6 pt-4 pb-2">
  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
  #photography
  </span>
  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    #travel
  </span>
  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    #winter
  </span>
</div>
</div>
