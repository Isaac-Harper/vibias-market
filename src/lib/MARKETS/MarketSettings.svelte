<script>
	import Double from '$lib/Buttons/Double.svelte';
	import Primary from '$lib/Buttons/Primary.svelte';
	import Secondary from '$lib/Buttons/Secondary.svelte';
	import {
		user,
		current_market,
		patron_list,
		state,
		openMarket,
		deleteMarket,
		resetState,
		updateMarket
	} from '$lib/db';
	import NumberInput from '$lib/NumberInput.svelte';
	import TextArea from '$lib/TextArea.svelte';
	import TextInput from '$lib/TextInput.svelte';

	$: new_market = $current_market;
	$: markets_patrons = $patron_list.filter((v) => v.market_id === $current_market.id);

	function closeSettings() {
		openMarket();
	}

	function deleteM() {
		deleteMarket($current_market.id);
		resetState();
	}

	function applySettings() {
		updateMarket(new_market);
		openMarket();
	}
</script>

{#if $user.id === $current_market.creator_id}
	{#if $state.edit_market_open}
		<div class="container">
			<h3 class="title">Market Setting</h3>
			<div class="body">
				<TextInput bind:value={new_market.name} title="Name" />
				<TextArea title="Description" bind:value={new_market.description} />
				<NumberInput title="New patrons starting gold:" bind:value={new_market.starting_coins} />
				<p>Your join ID is:</p>
				<p style="font-size: small;">{new_market.join_id}</p>
				{#each markets_patrons as patron}
					<div class="flex">
						{patron.name}
						{patron.coins}
						<button>Remove Player</button>
						<button>Change coins</button>
					</div>
				{/each}
				<Primary text="Apply" func={applySettings} />
				<Double text="Delete" second_text="Are you sure?" func={deleteM} />
				<Secondary text="Close Settings" func={closeSettings} />
			</div>
		</div>
	{/if}
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

	.flex {
		display: flex;
	}
</style>
