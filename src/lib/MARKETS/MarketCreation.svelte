<script>
	import Primary from "$lib/Buttons/Primary.svelte";
	import Secondary from "$lib/Buttons/Secondary.svelte";
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
    <h3 class="title">Market Creation</h3>
    <div class="new_input">
        <TextInput title="Name" bind:value={new_market_name}></TextInput>
        <TextArea title="Description" bind:value={new_market_description}></TextArea>
        <Primary text="Create" func={() => createNew(new_market_name, new_market_description)} />
        <Secondary text="Cancel" func={closeCreate}/>
    </div>
{/if}

<style>

    .new_input{
        display: grid;
        gap: var(--med-space);
    } 

</style>