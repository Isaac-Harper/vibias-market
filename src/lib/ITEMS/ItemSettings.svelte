<script lang="ts">
	import NumberInput from './../NumberInput.svelte';
	import { current_item, state, openItem, deleteItem, openShop, updateItem } from '$lib/db';
	import TextInput from '$lib/TextInput.svelte';
	import TextArea from '$lib/TextArea.svelte';
	import Double from '$lib/Buttons/Double.svelte';
	import Primary from '$lib/Buttons/Primary.svelte';
	import Secondary from '$lib/Buttons/Secondary.svelte';

	$: new_item = $current_item;

	function closeSettings() {
		openItem();
	}

	function deleteShop() {
		deleteItem($current_item.id);
		openShop();
	}

	function applySettings() {
		updateItem(new_item);
		openItem();
	}
</script>

{#if $state.edit_item_open}
	<div class="container">
		<h3 class="title">Item Settings:</h3>
		<div class="body">
			<TextInput title="Item Name" bind:value={new_item.name} />
			<TextArea title="Item Description" bind:value={new_item.description} />
			<NumberInput title="Price" bind:value={new_item.price} />
			<Primary text="Apply" func={applySettings} />
			<Double text="Delete" second_text="Are you sure?" func={deleteShop} />
			<Secondary text="Close Settings" func={closeSettings} />
		</div>
	</div>
{/if}

<style>
	.container {
		grid-area: sets;
	}

	.body {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
