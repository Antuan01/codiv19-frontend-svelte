<script>
  import { FormSchema } from './validation/FormSchema';

let values = {
  name: '',
  email: '',
  password: '',
  number: '',
};

let errors = [];

const checkFields = () => {
      errors = []
    FormSchema.validate(values, { abortEarly: false })
    .then(() => {
      alert(JSON.stringify(values, null, 2));
    })
    .catch((err) => {
      alert(JSON.stringify(err.message, null, 2));
      console.log(err.inner)
      console.log(err.inner.map(el => console.log(el.path)))
      err.inner.map(el => errors = [el.path,...errors])
    });

  }

</script>

<div class="w-full max-w-xs">
    <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        class:border-red-500={errors.includes('name')}
        id="name" 
        type="text" 
        placeholder=""
        bind:value={values.name}
        >
        {#if errors.includes('name')}
          <p class="text-red-500">
              The name is required
          </p>
        {/if}
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
        id="email" 
        type="email" 
        placeholder=""
        bind:value={values.email}
        class:border-red-500={errors.includes('email')}
        >
        {#if errors.includes('email')}
        <p class="text-red-500">
            Please enter a valid email
        </p>
      {/if}
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        id="password" 
        type="password" 
        placeholder=""
        bind:value={values.password}
        class:border-red-500={errors.includes('password')}
        >
        {#if errors.includes('password')}
        <p class="text-red-500">
            The password field is required
        </p>
      {/if}
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="number">
          Number
        </label>
        <input 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
        id="number" 
        type="number" 
        placeholder=""
        bind:value={values.number}
        class:border-red-500={errors.includes('number')}
        >
        {#if errors.includes('number')}
        <p class="text-red-500">
            The number field is requiered
        </p>
      {/if}
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        on:click={checkFields}
        >
          Submit
        </button>
      </div>
    </form>

    <!-- <div> -->
  <!-- {#await result}
      <p> loading </p>
  {:then value}
    <h2>Validation Result</h2>
    <pre>{JSON.stringify(value, null, 2)}</pre>
  {:catch value}
    <h2>Validation Error</h2>
    <pre>{JSON.stringify(value, null, 2)}</pre>
  {/await}
</div> -->

    <p class="text-center text-gray-500 text-xs">
      &copy;2020 Codiv Corp. All rights reserved.
    </p>
  </div>