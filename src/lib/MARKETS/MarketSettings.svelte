<script>
	import ApplyButton from "$lib/ApplyButton.svelte";
    import {user, current_market, patron_list } from "$lib/db"
	import DeleteButton from "$lib/DeleteButton.svelte";
	import Dropdown from "$lib/Dropdown.svelte";
	import NumberInput from "$lib/NumberInput.svelte";
	import TextArea from "$lib/TextArea.svelte";
	import TextInput from "$lib/TextInput.svelte";
	
	let setting_open = false

    $: new_market = $current_market
    $: markets_patrons = $patron_list.filter(v => v.market_id === $current_market.id)
	
	function toggleSettings() {
		setting_open = !setting_open
	}
</script>




{#if $user.id === $current_market.creator_id}
	{#if setting_open}
		<div class="container">
			<h3>Market Setting</h3>
			<div class="body">
				<TextInput bind:value={new_market.name} title="Name"/>
				<TextArea title="Description" bind:value={new_market.description}></TextArea>
				<NumberInput title="New patrons starting gold:" bind:value={new_market.starting_coins}/>
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
				<div class="flex">
					<ApplyButton type="market" obj={new_market}/>
					<DeleteButton type="market" id={$current_market.id}/>
				</div>
			</div>
		</div>
	{:else}
		<button class="ri-settings-line" on:click={toggleSettings}></button>>
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