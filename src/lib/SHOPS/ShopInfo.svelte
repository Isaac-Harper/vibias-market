<script lang="ts">
	import { user } from '$lib/db';
	import {
		state,
		openItemCreate,
		item_list,
		current_shop,
		resetItem,
		openShopEdit,
		current_market,
		current_item
	} from '$lib/Backend/state';
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
	<div class="card" transition:blur|local={{ duration: 300 }}>
		{#if !$state.create_item_open && !$state.edit_shop_open}
			<h3 class="title">{$current_shop.name}</h3>
			<p>{$current_shop.description}</p>

			<HorizontalList content={current_items} list="item" />

			{#if $user.id === $current_market.creator_id}
				<div class="flex">
					<Primary text="Create Item" func={openItemCreation} />
					<Primary text="Settings" func={openShopSettings} />
				</div>
			{/if}
		{/if}

		<ItemCreation />
		<ShopSettings />
	</div>
{/if}
