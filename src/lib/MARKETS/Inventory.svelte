<script>
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
</script>

{#if $user.id !== $current_market.creator_id && $current_market.id !== 0}
	{#if inventory_open}
		<Primary text="Close Inventory" func={toggleInventory} />
		<div>
			{#if $current_patron.id !== 0}
				<p>Player Name: {$current_patron.name}</p>
				<p>Coins: {$current_patron.coins}</p>

				{#each $current_patron.inventory_ids as item}
					<details>
						<summary>{item.name}</summary>
						{item.description}
					</details>
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
