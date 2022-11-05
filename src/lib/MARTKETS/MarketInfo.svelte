<script lang="ts">
	import ShopList from '../SHOPS/ShopList.svelte';
    import {shop_list, current_market, deleteMarket, user } from "$lib/db"
	import ShopCreation from '../SHOPS/ShopCreation.svelte'
	import ShopSettings from "$lib/SHOPS/ShopSettings.svelte"
	import Inventory from '$lib/MARTKETS/Inventory.svelte';
    import { slide } from 'svelte/transition';
    
    $: current_shops = $shop_list.filter(v => v.market_id === $current_market.id)


    function deleteM() {
        deleteMarket($current_market.id)
    }

    let creating_new_shop = false
</script>


{#if $current_market.id !== 0 }
    <div class="container element--border--primary" transition:slide|local> 
        <div class="body">
            {#if creating_new_shop}
                <ShopCreation bind:creating_new_shop={creating_new_shop}/>
            {:else}
                <h3>{$current_market.name}</h3>

                
                <p>{$current_market.description}</p> 
            {/if}
        </div>
        
        
        <ShopList current_shops={current_shops} bind:creating_new_shop={creating_new_shop}/>
        
        <Inventory/>
    </div>
{/if}


<style>
    .container {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-areas: "body      list"
                             "sets      sets";
        gap: 1rem;
        padding: 1rem;
        
 
    }

    .body {
        grid-area: body;
    }
</style>