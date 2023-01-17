<script lang="ts">
	import { current_patron } from './../Backend/state.ts';
	import Primary from '$lib/Buttons/Primary.svelte';
	import {
		shop_list,
		current_market,
		state,
		openShopCreate,
		openMarketEdit,
		resetShop
	} from '$lib/Backend/state';
	import { createPatron, user } from '$lib/db';
	import ShopCreation from '../SHOPS/ShopCreation.svelte';
	import Inventory from '$lib/MARKETS/Inventory.svelte';
	import { blur } from 'svelte/transition';
	import MarketSettings from './MarketSettings.svelte';
	import HorizontalList from '$lib/MARKETS/HorizontalList.svelte';
	import TextInput from '$lib/TextInput.svelte';

	$: current_shops = $shop_list.filter((v) => v.market_id === $current_market.id);

	function openShopCreation() {
		openShopCreate();
		resetShop();
	}

	let new_name = '';

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

			{#if $current_patron.id === 0}
				<div class="item">
					<p>You don't have a character yet!</p>
					<TextInput title="name" bind:value={new_name} />
					<button on:click={() => createPatron(new_name)}>Create</button>
				</div>
			{:else}
				<Inventory />
			{/if}

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

<style>
	.item {
		background-color: var(--inventory-background);
		border: 2px solid var(--inventory-border);
		border-radius: 1rem;
		box-shadow: var(--inventory-border) 4px 4px 0 0;
		padding: 1rem;
	}
</style>
