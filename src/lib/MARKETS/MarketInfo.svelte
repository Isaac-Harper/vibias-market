<script lang="ts">
	import Primary from '$lib/Buttons/Primary.svelte';
	import {
		shop_list,
		current_market,
		state,
		openShopCreate,
		openMarketEdit,
		resetShop
	} from '$lib/Backend/state';
	import { user } from '$lib/db';
	import ShopCreation from '../SHOPS/ShopCreation.svelte';
	import Inventory from '$lib/MARKETS/Inventory.svelte';
	import { blur } from 'svelte/transition';
	import MarketSettings from './MarketSettings.svelte';
	import HorizontalList from '$lib/MARKETS/HorizontalList.svelte';

	$: current_shops = $shop_list.filter((v) => v.market_id === $current_market.id);

	function openShopCreation() {
		openShopCreate();
		resetShop();
	}

	function openMarketSettings() {
		openMarketEdit();
		resetShop();
	}
</script>

{#if $state.market_open}
	<div class="card" transition:blur|local={{ duration: 300 }}>
		{#if !$state.edit_market_open && !$state.create_shop_open}
			<h3 class="title">{$current_market.name}</h3>
			<p>{$current_market.description}</p>

			<HorizontalList content={current_shops} list="shop" />
			<Inventory />

			{#if $user.id === $current_market.creator_id}
				<div class="flex">
					<Primary text="Create Shop" func={openShopCreation} />
					<Primary text="Settings" func={openMarketSettings} />
				</div>
			{/if}
		{/if}

		<ShopCreation />
		<MarketSettings />
	</div>
{/if}
