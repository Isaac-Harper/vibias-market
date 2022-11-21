<script>
	import { state, user, newMarket, openMarket, resetState } from "$lib/db";
	import TextArea from "$lib/TextArea.svelte";
	import TextInput from "$lib/TextInput.svelte";


    let new_market_name = ""
    let new_market_description = ""

    function createNew(name, description) {
        newMarket(name, description, $user.id)
        openMarket()
    }

    function closeCreate() {
        resetState()
    }
</script>

{#if $state.create_market_open} 
    <div class="new_input">
        <TextInput title="Name" bind:value={new_market_name}></TextInput>
        <TextArea title="Description" bind:value={new_market_description}></TextArea>
        <div><button on:click={() => createNew(new_market_name, new_market_description)}>Create</button></div>
        <button on:click={closeCreate}>close Create</button>
    </div>
{/if}

<style>

    .new_input{
        display: grid;
        gap: var(--med-space);
    } 

</style>