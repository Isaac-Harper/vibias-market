<script lang="ts">
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
        <div class="title">
            <h3>Markets</h3>
        </div>
        <HorizontalList list="market"/>
        <button on:click={openCreate}>Create market</button>
        <button on:click={openJoin}>Join market</button>
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

    .title {
        display: flex;
        gap: var(--med-space);
    }

   
</style>