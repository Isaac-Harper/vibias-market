<script lang="ts">
	import { updateShop, deleteShop } from '$lib/db';
	import { current_shop, state, openShop, openMarket } from '$lib/Backend/state';
	import TextInput from '$lib/TextInput.svelte';
	import TextArea from '$lib/TextArea.svelte';
	import Double from '$lib/Buttons/Double.svelte';
	import Primary from '$lib/Buttons/Primary.svelte';
	import Secondary from '$lib/Buttons/Secondary.svelte';

	$: new_shop = $current_shop;

	function closeSettings() {
		openShop();
	}

	function deleteS() {
		deleteShop($current_shop.id);
		openMarket();
	}

	function applySettings() {
		updateShop(new_shop);
		openShop();
	}
</script>

{#if $state.edit_shop_open}
	<div class="container">
		<h3 class="title">Shop Settings:</h3>
		<div class="body">
			<TextInput title="Shop Name" bind:value={new_shop.name} />
			<TextArea title="Shop Description" bind:value={new_shop.description} />

			<Double text="Delete" second_text="Are you sure?" func={deleteS} />

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
		gap: var(--med-space);
	}
</style>
