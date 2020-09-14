<script>
import { emailV } from "./validation/validator";

    let form = {
        name: "",
        email: "",
        errors: false,
        messages: [],
        confirmed: false,
    }

    let isFocused = false;
    let isBlured = false;

    const isFocus = () => isFocused = true;
    
    const isBlur = () => isFocused = false;
    
    const validate = (arg) => {
        console.log(arg)
    }

    $: console.log(form)

    $: {
        // validate()
        // checkErrors()
        // isReady()
    }

</script>

<h1> Epa que paso </h1>

<input
    class="input"
    type="text"
    bind:value={form.name}
    placeholder="Your Name"
    on:focus={isFocus}
    on:blur={isBlur}
    use:validate={form}
/>

<input
    class="input"
    type="text"
    bind:value={form.email}
    placeholder="Your Email"
    on:focus={isFocus}
    on:blur={isBlur}
    use:validate={form}
/>

{#if !form.confirmed && form.messages.length > 0}
<span>
    {form.messages}
</span>
{/if}

<p> Focus: {isFocused} </p>
<p> Blur: {isBlured} </p>

<button disabled={!form.confirmed}> Submit!</button>

