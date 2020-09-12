<script>
    import CardsContainer from "./CardsContainer.svelte";
    import { getContext } from 'svelte';
    import Message from './Message.svelte';
    import Form from './Form.svelte';

    const { open } = getContext('simple-modal');

    const showSurprise = () => {
        open(Form);
    };

</script>

<h1> Hola bebe </h1>

<CardsContainer/>

<p><button on:click={showSurprise}>Show me a surprise!</button></p>