<script lang="ts">
	import NumberInput from './../NumberInput.svelte';
	import { deleteItem, updateItem } from '$lib/db';
	import { current_item, state, openItem, openShop } from '$lib/Backend/state';
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

			<Double text="Delete" second_text="Are you sure?" func={deleteShop} />

			<div class="flex">
				<Primary text="Apply" func={applySettings} />
				<Secondary text="Close" func={closeSettings} />
			</div>
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
