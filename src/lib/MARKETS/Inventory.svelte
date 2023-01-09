<script lang="ts">
	import Dropdown from '$lib/Dropdown.svelte';
	import { user, createPatron } from '$lib/db';
	import { current_market, current_patron } from '$lib/Backend/state';
	import TextInput from '../TextInput.svelte';
	import Primary from '$lib/Buttons/Primary.svelte';

	let new_name = '';

	let inventory_open = false;

	function toggleInventory() {
		inventory_open = !inventory_open;
	}

	let counts = [];

	$: {
		counts = [];
		for (const item of $current_patron.inventory_ids) {
			const i = counts.findIndex((e) => e.item.id === item.id);
			if (i > -1) {
				counts[i].count = counts[i].count + 1;
			} else {
				counts.push({ item: item, count: 1 });
			}
		}
	}

	$: console.log(counts);
</script>

{#if $user.id !== $current_market.creator_id && $current_market.id !== 0}
	{#if inventory_open}
		<Primary text="Close Inventory" func={toggleInventory} />
		<div class="container">
			{#if $current_patron.id !== 0}
				<p>Player Name: {$current_patron.name}</p>
				<p>Coins: {$current_patron.coins}</p>

				{#each counts as { item, count }}
					<div class="item">
						<h3>{item.name}</h3>
						<p>Quantity: {count}</p>
						<p>{item.description}</p>
					</div>
				{/each}
			{:else}
				<p>You don't have a character yet!</p>
				<TextInput title="name" bind:value={new_name} />
				<button on:click={() => createPatron(new_name)}>Create</button>
			{/if}
		</div>
	{:else}
		<Primary text="Open Inventory" func={toggleInventory} />
	{/if}
{/if}

<style>
	.container {
		background-color: var(--inventory-background);
		border: 2px solid var(--inventory-border);
		border-radius: var(--med-space);
		box-shadow: var(--inventory-border) 4px 4px 0 0;
		padding: var(--med-space);

		display: flex;
		flex-direction: column;
		gap: var(--med-space);
	}

	.item {
		background-color: var(--item-background);
		border: 2px solid var(--item-border);
		border-radius: 1rem;
		box-shadow: var(--item-border) 4px 4px 0 0;
		padding: 1rem;
	}
</style>
