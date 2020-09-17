<script>
export let click = () => {};
export let isSubmit = false;
export let customClass = "";
export let aditionalClass ="";
const defaultClass = () => "bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-white"
</script>

<button 
    on:click={click}
    type={isSubmit ? "submit": "button"}
    class={`${customClass || defaultClass()} ${aditionalClass}`}
>
	<slot></slot>
</button>