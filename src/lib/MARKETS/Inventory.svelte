<script>
	import Dropdown from "$lib/Dropdown.svelte";
    import { current_market, current_patron, user, createPatron } from "../db";
	import TextInput from "../TextInput.svelte";

    let new_name = ""

</script>


{#if $current_market.id !== 0}
    <div class="container">
        {#if $user.id !== $current_market.creator_id}
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