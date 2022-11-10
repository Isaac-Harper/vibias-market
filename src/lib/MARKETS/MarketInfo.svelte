<script lang="ts">
	import ShopList from '../SHOPS/ShopList.svelte';
    import {shop_list, current_market, state } from "$lib/db"
	import ShopCreation from '../SHOPS/ShopCreation.svelte'
	import Inventory from '$lib/MARKETS/Inventory.svelte';
    import { slide } from 'svelte/transition';
	import MarketSettings from './MarketSettings.svelte';
    import HorizontalList from "$lib/MARKETS/HorizontalList.svelte";
	
    $: current_shops = $shop_list.filter(v => v.market_id === $current_market.id)

	let setting_open
	
	function toggleNewShop() {
		$state.create_shop_open = !$state.create_shop_open
    }
</script>


{#if $state.market_open }
    <div class="container element--border--primary" transition:slide|local> 
        {#if !$state.edit_market_open}
			<div class="body">
				{#if !$state.create_shop_open}
					<h3>{$current_market.name}</h3>
					<p>{$current_market.description}</p> 
					<button on:click={toggleNewShop}>Create new Shop</button>
					<button class="ri-admin-line"></button>
				{/if}
				
				<ShopCreation/>
			</div> 
			<HorizontalList content={current_shops} list="shop"/>
			<Inventory/>
		{/if}
        <MarketSettings />
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