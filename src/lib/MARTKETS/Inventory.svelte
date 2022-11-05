<script>
	import Dropdown from "$lib/Dropdown.svelte";
	import TextArea from "$lib/TextArea.svelte";
	import { get } from "svelte/store";
    import { current_market, current_patron, current_shop, user, patron_list, updateMarket, createPatron, deleteMarket } from "../db";
	import TextInput from "../TextInput.svelte";

    $: markets_patrons = $patron_list.filter(v => v.market_id === $current_market.id)



    let new_market = get(current_market)

    let new_name = ""

</script>


{#if $current_market.id !== 0}
    <div class="container">
        {#if $user.id === $current_market.creator_id}
            

            <Dropdown>
                <span slot="title">Market Setting</span>
                <div slot="body">
                    <TextInput bind:value={new_market.name} title="Name"/>
                    <TextArea title="Description" bind:value={new_market.description}></TextArea>
                    <p>New patrons starting gold:</p>
                    <input type="number" bind:value={new_market.starting_coins}>
                    <p>Your join ID is:</p>
                    <p style="font-size: small;">{new_market.join_id}</p>
                    {#each markets_patrons as patron}
                        {patron.id}
                    {/each}
                    <button on:click={() => updateMarket(new_market)}>Apply</button>
                    <button class="delete_button element--border--primary" on:click={() => deleteMarket(new_market.id)}>Delete</button>
                </div>
             </Dropdown>
        {:else}

            <Dropdown>
                <span slot="title">Your Inventory:</span>
                <div slot="body">
                    {#if $current_patron.id !== 0}
                        <p>Player Name: {$current_patron.name}</p>
                        <p>Coins: {$current_patron.coins}</p>

                        {#each $current_patron.inventory_ids as item}
                            <details>
                                <summary>{item.name}</summary>
                                {item.description}
                            </details>
                        {/each}
                    {:else}
                        <p>You don't have a character yet!</p>
                        <TextInput title="name" bind:value={new_name} />
                        <button on:click={() => createPatron(new_name)}>Create</button>
                    {/if}
                </div>
            </Dropdown>

        {/if}
    </div>
{/if}


<style>
    .container {
        grid-area: sets;
    }

</style>