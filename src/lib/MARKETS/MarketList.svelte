<script lang="ts">
	import Primary from '$lib/Buttons/Primary.svelte';
	import { resetMarket, state, openMarketJoin, openMarketCreate } from '$lib/Backend/state';
	import HorizontalList from '$lib/MARKETS/HorizontalList.svelte';
	import MarketCreation from './MarketCreation.svelte';
	import MarketJoin from './MarketJoin.svelte';

	function openCreate() {
		openMarketCreate();
		resetMarket();
	}

	function openJoin() {
		openMarketJoin();
		resetMarket();
	}
</script>

<div class="holder" class:creating_new={$state.create_market_open === true}>
	{#if !$state.create_market_open && !$state.join_market_open}
		<h3 class="title">Markets</h3>
		<HorizontalList list="market" />
		<Primary text="Create market" func={openCreate} />
		<Primary text="Join market" func={openJoin} />
	{/if}

	<MarketCreation />

	<MarketJoin />
</div>

<style>
	.holder {
		display: flex;
		flex-direction: column;
		gap: var(--med-space);
		padding: var(--med-space);
		background-color: var(--card-dark);
		color: var(--normal-font-dark);
		box-shadow: var(--card-border-shadow);
		border-radius: var(--med-space);
	}
</style>
