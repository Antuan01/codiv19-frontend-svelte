<script>
    import { emailV, required, stringV, numericV } from "./validation/validator";

    let values = {
    name: {
        error: false,
        value: "",
    },
    email: {
        error: false,
        value: "",
    },
    password: {
        error: false,
        value: "",
    },
    number: {
        error: false,
        value: "",
    },
    };

    let available = false

    const availableCheck = () => { 
        available = !Object.values(values).map(el => el.error).includes(true)
        console.log(available)
    }

    const validateEmail = () => {
        values.email.error = emailV(values.email.value) 
        availableCheck()
    }

    const validateName = () => {
        values.name.error = stringV(values.name.value)
        availableCheck()
    }

    const validatePassword = () => {values.password.error = required(values.password.value)
        availableCheck()
    }

    const validateNumber = () => {values.number.error = numericV(values.number.value)
        availableCheck()
    }

    const submit = () => console.log("hola bebe")

</script>

<div class="w-full max-w-xs">
    <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">

        <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Name
            </label>
            <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            class:border-red-500={values.name.error}
            id="name" 
            type="text" 
            placeholder=""
            bind:value={values.name.value}
            on:blur={validateName}
            on:input={validateName}
            >
            {#if values.name.error}
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
        class="shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 mb-3 leading-tight focus:outline-none
            focus:shadow-outline"
        id="email"
        type="email"
        placeholder=""
        bind:value={values.email.value}
        class:border-red-500={values.email.error} 
        on:blur={validateEmail}
        on:input={validateEmail}
        />
        {#if values.email.error}
        <p class="text-red-500">Please enter a valid email</p>
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
        bind:value={values.password.value}
        class:border-red-500={values.password.error}
        on:blur={validatePassword}
        on:input={validatePassword}
        >
        {#if values.password.error}
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
        min=0
        placeholder=""
        bind:value={values.number.value}
        class:border-red-500={values.number.error}
        on:blur={validateNumber}
        on:input={validateNumber}
        >
        {#if values.number.error}
        <p class="text-red-500">
            The number field is requiered
        </p>
      {/if}
      </div>

    <div class="flex items-center justify-between">
        <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
            rounded focus:outline-none focus:shadow-outline"
        type="button"

        class:disable={!available}
        disabled={!available}
        class:cursor-not-allowed={!available}

        on:click={submit}>
        Submit
        </button>
    </div>
    </form>

    <p class="text-center text-gray-500 text-xs">
    &copy;2020 Codiv Corp. All rights reserved.
    </p>
</div>
