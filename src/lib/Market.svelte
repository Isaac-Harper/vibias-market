<script lang="ts">
	import { current_item_id, current_markets, current_market_id, current_shop_id, deleteMarket, getMarkets, user } from '$lib/db';

    export let name: string
    export let description: string
    export let id: number

    export let owner = false

    let active_id: number

    current_market_id.subscribe(value => {
        active_id = value
    })

    function openMarket() {
        current_shop_id.set(0)
        current_item_id.set(0)

        if (active_id === id) {
            current_market_id.set(0)
        } else {
            current_market_id.set(id)
        }
    }




    $: active = id === active_id
</script>

<div class="container" class:selected="{active}">
    {#if owner}
        <div class="owner"></div>
    {/if}
    
    <h4>{name}</h4>
    {#if active_id === id}
        <p>{description}</p>
        <button on:click={openMarket}>Leave Market</button>
        {#if owner}
            <button on:click={() => deleteMarket(id)}>Delete Market</button>
        {/if}
    {:else}
        <button on:click={openMarket}>Enter Market</button>
    {/if} 
    
    
    <slot/>
</div>


<style>
    .container {
        border: solid;
        border-radius: 2rem;
        padding: 2rem;
        max-width: 20rem;

        position: relative;
        overflow: hidden;
    }

    h4 {
        font-size: x-large;
    }

    .selected {
        background-color: goldenrod;
    }

    .owner {
        position: absolute;
        top: 0rem;
        left: 0;
        height: 1rem;
        width: 100%;
        background-color: red;
    }
</style>