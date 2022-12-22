<script>
	import Primary from '$lib/Buttons/Primary.svelte';
	import Secondary from '$lib/Buttons/Secondary.svelte';
	import { joinMarket } from '$lib/db'
	import { state, openMarket, resetState } from '$lib/Backend/state';
	import TextInput from '$lib/TextInput.svelte';

	function joinNew(join_id) {
		joinMarket(join_id);
		openMarket();
	}

	function closeJoin() {
		resetState();
	}

	let join_id = '';
</script>

{#if $state.join_market_open}
	<h3 class="title">Market Join</h3>
	<div class="new_input">
		<TextInput title="Join ID" bind:value={join_id} />
	</div>

	<Primary text="Join!" func={() => joinNew(join_id)} />
	<Secondary text="Cancel" func={closeJoin} />
{/if}
