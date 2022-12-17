<script lang="ts">
	export let current_items;
	export let creating_new_item;

	import { user, current_market, current_item, resetItem } from '../db';

	function toggle_item(item) {
		if (item == $current_item) {
			resetItem();
		} else {
			current_item.set(item);
		}
	}

	function toggleNewItem() {
		creating_new_item = !creating_new_item;
	}
</script>

<div class="list element--border--primary">
	{#if $user.id === $current_market.creator_id}
		{#if creating_new_item}
			<button on:click={toggleNewItem} class="newItem item element--border--primary"
				>Cancel New Item</button
			>
		{:else}
			<button on:click={toggleNewItem} class="newItem item element--border--primary"
				>New Item</button
			>
		{/if}
	{/if}

	{#each current_items as item}
		<div
			on:click={() => toggle_item(item)}
			class="item element--border--primary"
			class:selected={item.id === $current_item.id}
			class:unselected={item.id !== $current_item.id}
		>
			{item.name}
		</div>
	{/each}
</div>

<style>
	.list {
		grid-area: list;
		display: flex;
		flex-direction: column;
		overflow-y: scroll;
		max-height: 18rem;
		padding: var(--med-space);
		width: 12rem;
		gap: var(--med-space);
	}
	.item {
		flex: 0 0 5rem;
		display: flex;

		justify-content: center;
		align-items: center;
	}
	.newItem {
		background-color: var(--blue);
		flex: 0 0 3rem;
	}
</style>
