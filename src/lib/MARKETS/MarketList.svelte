<script lang="ts">
    import Button from "$lib/Button.svelte";
import { resetMarket, state, openMarketJoin, openMarketCreate} from "$lib/db"
	import HorizontalList from '$lib/MARKETS/HorizontalList.svelte';
	import MarketCreation from './MarketCreation.svelte';
	import MarketJoin from './MarketJoin.svelte';


    function openCreate() {
        openMarketCreate()
        resetMarket()
    }

    function openJoin() {
        openMarketJoin()
        resetMarket()
    }

 
</script>




<div class="holder" class:creating_new="{$state.create_market_open === true}">
    

    {#if !$state.create_market_open && !$state.join_market_open}
        <h3 class="title">Markets</h3>
        <HorizontalList list="market"/>
        <button class="button-74" on:click={openCreate}>Create market</button>
        <button class="button-74" on:click={openJoin}>Join market</button>
        <Button func={openCreate} text="Create Market"  />
    {/if}
    
    <MarketCreation/>

    <MarketJoin/>

</div>


<style>
    .holder {
        display: flex;
        flex-direction: column;
        gap: var(--med-space);
        padding: var(--med-space);
        background-color: var(--card-dark);
        color: var(--normal-font-dark);
        box-shadow: var(--card-border-shadow);
    }





   
</style>