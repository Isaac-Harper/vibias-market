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

<div class="card" class:creating_new={$state.create_market_open === true}>
	{#if !$state.create_market_open && !$state.join_market_open}
		<h3 class="title">Markets</h3>
		<HorizontalList list="market" />
		<div class="flex">
			<Primary text="Create" func={openCreate} />
			<Primary text="Join" func={openJoin} />
		</div>
	{/if}

	<MarketCreation />

	<MarketJoin />
</div>
