<script>
	import { bind } from "svelte/internal";
	import { get } from "svelte/store";
import { current_market, current_patron, current_shop, user, patron_list, updateMarket } from "../db";
	import TextInput from "../TextInput.svelte";

    $: markets_patrons = $patron_list.filter(v => v.market_id === $current_market.id)
 
    let new_market = get(current_market)

    console.log(new_market)
    let new_name = ""
    
    
    function setValues() {
        let new_market = get(current_market)
    
    }
</script>


{#if $current_market.id !== 0}
    <div class="container element--border--primary">
        {#if $user.id === $current_market.creator_id}
            <details on:click={setValues}>
                <summary><h3>Market Setting</h3></summary>
                <TextInput bind:value={new_market.name} title="Name"/>
                <p>New patrons starting gold:</p>
                <input type="number" bind:value={new_market.starting_coins}>
                <p>Your join ID is:</p>
                <p style="font-size: small;">{new_market.join_id}</p>
                {#each markets_patrons as patron}
                    {patron.id}
                {/each}
                <button on:click={() => updateMarket(new_market)}>Apply</button>
            </details>
        {:else}

            <details>
                <summary><h3>Your Inventory:</h3></summary>


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
                {/if}
            </details>
        {/if}
    </div>
{/if}


<style>
    .container {
        padding: 1rem;
    }

</style>