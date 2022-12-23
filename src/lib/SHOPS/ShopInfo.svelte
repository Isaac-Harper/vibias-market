<script lang="ts">
	import {
		user
	} from '$lib/db';
	import { state, openItemCreate, item_list, current_shop, resetItem, openShopEdit, current_market } from '$lib/Backend/state'
	import { blur } from 'svelte/transition';
	import ShopSettings from '$lib/SHOPS/ShopSettings.svelte';
	import HorizontalList from '$lib/MARKETS/HorizontalList.svelte';
	import ItemCreation from '$lib/ITEMS/ItemCreation.svelte';
	import Primary from '$lib/Buttons/Primary.svelte';

	$: current_items = $item_list.filter((v) => v.shop_id === $current_shop.id);

	function openItemCreation() {
		openItemCreate();
		resetItem();
	}

	function openShopSettings() {
		openShopEdit();
		resetItem();
	}
</script>

{#if $state.shop_open}
	<div class="container card" transition:blur|local={{ duration: 300 }}>
		{#if !$state.create_item_open && !$state.edit_shop_open}
			<div class="body">
				<h3 class="title">{$current_shop.name}</h3>
				<p>{$current_shop.description}</p>
			</div>

			<HorizontalList content={current_items} list="item" />

			{#if $user.id === $current_market.creator_id}
				<Primary text="create new item" func={openItemCreation} />
				<Primary text="open settings" func={openShopSettings} />
			{/if}
		{/if}

		<ItemCreation />
		<ShopSettings />
	</div>
{/if}

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: var(--med-space);
		color: var(--normal-font-dark);
	}

	.body {
		grid-area: body;
	}
</style>
