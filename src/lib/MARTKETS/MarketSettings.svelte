<script>
	import ApplyButton from "$lib/ApplyButton.svelte";
    import {user, current_market, patron_list } from "$lib/db"
	import DeleteButton from "$lib/DeleteButton.svelte";
	import Dropdown from "$lib/Dropdown.svelte";
	import NumberInput from "$lib/NumberInput.svelte";
	import TextArea from "$lib/TextArea.svelte";
	import TextInput from "$lib/TextInput.svelte";

    $: new_market = $current_market
    $: markets_patrons = $patron_list.filter(v => v.market_id === $current_market.id)
</script>

{#if $user.id === $current_market.creator_id}
    <div class="container">
        <Dropdown>
            <span slot="title">Market Setting</span>
            <div slot="body" class="body">
                <TextInput bind:value={new_market.name} title="Name"/>
                <TextArea title="Description" bind:value={new_market.description}></TextArea>
                <NumberInput title="New patrons starting gold:" bind:value={new_market.starting_coins}/>
                <p>Your join ID is:</p>
                <p style="font-size: small;">{new_market.join_id}</p>
                {#each markets_patrons as patron}
                    {patron.id}
                {/each}
                <ApplyButton type="market" obj={new_market}/>
                <DeleteButton type="market" id={$current_market.id}/>
            </div>
        </Dropdown>
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