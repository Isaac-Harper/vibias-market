<script>
	import { state, openMarket, joinMarket, resetState } from "$lib/db";
	import TextInput from "$lib/TextInput.svelte";


    
    function joinNew(join_id) {
        joinMarket(join_id)
        openMarket()
    }

    function closeJoin() {
        resetState()
    }

    let join_id = ""
</script>

{#if $state.join_market_open}
    <h3 class="title">Market Join</h3>
    <div class="new_input">
        <TextInput title="Join ID" bind:value={join_id}></TextInput>
        <div><button on:click={() => joinNew(join_id)}>Join</button></div>
    </div>
    <button on:click={closeJoin}>close join</button>
{/if}