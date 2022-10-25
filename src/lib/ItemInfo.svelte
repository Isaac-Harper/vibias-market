<script lang="ts">
     
    import {buyItem, current_item, current_market, deleteItem, user, patron_list} from "$lib/db"
    
    function deleteI() {
    deleteItem($current_item.id)
    }

    function buyI() {
        buyItem( $current_item.id, current_patron.id )
    }

    $: markets_patrons = $patron_list.filter(v => v.market_id === $current_market.id)
    $: current_patron = markets_patrons.filter(v => v.player_id === $user.id)[0]
</script>


{#if $current_item.id !== 0} 
    <div class="container element--border--primary">
        <h3>{$current_item.name}</h3>  
        {$current_item.price} Coins
        {$current_item.description}
                
        {#if $user.id === $current_market.creator_id}
            <button class="delete_button element--border--primary" on:click={deleteI}>x</button>
            <button class="settings_button element--border--primary">⚙</button>
        {:else
            <div class="buy_button element--border--primary" on:click={buyI}>Buy</div>
        {/if} 
    </div>
{/if}



<style>
    .container {
        height: 100%;
        overflow: hidden;
        
        grid-area: itemI;
        margin-left: 3rem;

        padding: 1rem;
    }

    
</style>
