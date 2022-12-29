<script lang="ts">
	import { buyItem, user } from '$lib/db';
	import {
		state,
		current_market,
		current_item,
		openItemEdit,
		patron_list
	} from '$lib/Backend/state';
	import ItemSettings from './ItemSettings.svelte';
	import { blur } from 'svelte/transition';
	import Primary from '$lib/Buttons/Primary.svelte';

	function buyI() {
		buyItem($current_item.id, current_patron.id);
	}

	$: markets_patrons = $patron_list.filter((v) => v.market_id === $current_market.id);
	$: current_patron = markets_patrons.filter((v) => v.player_id === $user.id)[0];

	function openItemSettings() {
		openItemEdit();
	}
</script>

{#if $state.item_open}
	<div class="card" transition:blur|local={{ duration: 300 }}>
		{#if !$state.edit_item_open}
			<h3 class="title">{$current_item.name}</h3>
			<p><b>{$current_item.price} Coins</b></p>
			<p>{$current_item.description}</p>

			{#if $user.id === $current_market.creator_id}
				<Primary text="Settings" func={openItemSettings} />
			{:else}
				<Primary text="Buy" func={buyI} />
			{/if}
		{/if}

		<ItemSettings />
	</div>
{/if}
