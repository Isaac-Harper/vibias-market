<script lang="ts">
	import ShopList from '../SHOPS/ShopList.svelte';
    import {shop_list, current_market } from "$lib/db"
	import ShopCreation from '../SHOPS/ShopCreation.svelte'
	import Inventory from '$lib/MARKETS/Inventory.svelte';
    import { slide } from 'svelte/transition';
	import MarketSettings from './MarketSettings.svelte';
    import HorizontalList from "$lib/MARKETS/HorizontalList.svelte";
	
    $: current_shops = $shop_list.filter(v => v.market_id === $current_market.id)

	let setting_open

    let creating_new_shop = false
	
	function toggleNewShop() {
        creating_new_shop = !creating_new_shop
    }
</script>


{#if $current_market.id !== 0 }
    <div class="container element--border--primary" transition:slide|local> 
        {#if !setting_open}
			<div class="body">
				{#if creating_new_shop}
					<ShopCreation bind:creating_new_shop={creating_new_shop}/>
				{:else}
					<h3>{$current_market.name}</h3>
					<p>{$current_market.description}</p> 
					<button on:click={toggleNewShop}>Create new Shop</button>
					<button class="ri-admin-line"></button>
				{/if}
			</div> 
			<HorizontalList content={current_shops} list="shop"/>
			<Inventory/>
		{/if}
        <MarketSettings bind:setting_open />
    </div>
{/if}


<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: var(--med-space);
        padding: var(--med-space);

        background-color: var(--card-dark);
        color: var(--normal-font-dark);
        box-shadow: var(--card-border-shadow);
    }

    .body {
        grid-area: body;
    }
</style>