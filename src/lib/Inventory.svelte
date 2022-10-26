<script>
	import { current_market, current_shop, user, patron_list } from "./db";

    $: markets_patrons = $patron_list.filter(v => v.market_id === $current_market.id)
    $: current_patron = markets_patrons.filter(v => v.player_id === $user.id)[0]
</script>


{#if $current_shop.id === 0 && $current_market.id !== 0}
    <div class="container element--border--primary">
        {#if $user.id === $current_market.creator_id} 
            <h3>Market Setting</h3>
            {#each markets_patrons as patron}
                {patron.id}
            {/each}
        {:else}
            <h3>Your Inventory</h3>
            <p>Player Name: {current_patron.name}</p>
            <p>Coins: {current_patron.coins}</p>

            {#each current_patron.inventory_ids as item}
                <details>
                    <summary>{item.name}</summary>
                    {item.description}
                </details>
            {/each}
        {/if}
    </div>
{/if}


<style>
    .container {
        grid-area: 5 / 1 / 8 / 3;
        padding: 1rem;
    }
</style>