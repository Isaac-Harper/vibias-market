<script lang="ts">
	import Selectable from '$lib/Buttons/Selectable.svelte';
	import {
		resetState,
		openMarket,
		openShop,
		openItem,
		current_market,
		market_list,
		patron_list,
		resetShop,
		resetMarket,
		resetPatron,
		current_patron,
		inventory,
		resetItem,
		current_item,
		current_shop
	} from '$lib/Backend/state';

	import { user } from '$lib/db';

	export let list = 'none';
	export let content = [];

	function toggle_market(market) {
		if (market == $current_market) {
			resetState();
			resetMarket();
			resetPatron();
		} else {
			current_market.set(market);
			let filtered = $patron_list.filter(
				(v) => v.player_id === $user.id && v.market_id === $current_market.id
			);
			if (filtered.length !== 0) {
				current_patron.set(filtered[0]);
				inventory.set($current_patron.inventory_ids);
			} else {
				resetPatron();
			}
			resetShop();
			openMarket();
		}
	}

	function toggle_shop(shop) {
		if (shop == $current_shop) {
			openMarket();
			resetShop();
		} else {
			current_shop.set(shop);
			resetItem();
			openShop();
		}
	}

	function toggle_item(item) {
		if (item == $current_item) {
			openShop();
			resetItem();
		} else {
			current_item.set(item);
			openItem();
		}
	}
</script>

<div class="container">
	{#if list === 'market'}
		{#each $market_list as market}
			<Selectable
				text={market.name}
				func={() => toggle_market(market)}
				active={$current_market.id === market.id}
			/>
		{/each}
	{:else if list === 'shop'}
		{#each content as shop}
			<Selectable
				text={shop.name}
				func={() => toggle_shop(shop)}
				active={$current_shop.id === shop.id}
			/>
		{/each}
	{:else if list === 'item'}
		{#each content as item}
			<Selectable
				text={item.name}
				func={() => toggle_item(item)}
				active={$current_item.id === item.id}
			/>
		{/each}
	{/if}
</div>

<style>
	.container {
		display: flex;
		overflow-x: scroll;
		padding: 0 1rem 4px;
		margin: 0 -1rem;
		gap: 0.5rem;

		scrollbar-width: none;
	}
</style>
