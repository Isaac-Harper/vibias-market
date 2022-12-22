<script lang="ts">
	export let current_shops;
	export let creating_new_shop;

	import { user } from '$lib/db';
	import { current_market, current_shop, resetShop, resetItem } from '$lib/Backend/state'

	function toggle_shop(shop) {
		if (shop == $current_shop) {
			resetShop();
		} else {
			current_shop.set(shop);
			resetItem();
		}
	}

	function toggleNewShop() {
		creating_new_shop = !creating_new_shop;
	}
</script>

<div class="list element--border--primary">
	{#if $user.id === $current_market.creator_id}
		{#if creating_new_shop}
			<button on:click={toggleNewShop} class="newItem item element--border--primary"
				>Cancel New Shop</button
			>
		{:else}
			<button on:click={toggleNewShop} class="newItem item element--border--primary"
				>New Shop</button
			>
		{/if}
	{/if}

	{#each current_shops as shop}
		<div
			on:click={() => toggle_shop(shop)}
			class="item element--border--primary"
			class:selected={shop.id === $current_shop.id}
			class:unselected={shop.id !== $current_shop.id}
		>
			{shop.name}
		</div>
	{/each}
</div>

<style>
	.list {
		display: flex;
		flex-direction: row;
		overflow-x: scroll;
		max-height: 18rem;
		padding: var(--med-space);
		gap: var(--med-space);
	}
	.item {
		flex: 0 0 10rem;
		display: flex;
		height: 2rem;

		justify-content: center;
		align-items: center;
	}
	.newItem {
		background-color: var(--blue);
		flex: 0 0 12rem;
	}
</style>
