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
        <div class="description">
            <h3>
                {$current_item.name}
                {#if $user.id === $current_item.creator_id}
                    <button class="delete_button element--border--primary" on:click={deleteI}>x</button>
                    <button class="settings_button element--border--primary">⚙</button>
                {/if}           
            </h3> 
            {$current_item.description}
            
        </div>
        {#if $user.id !== $current_market.creator_id}
            <div class="buy" on:click={buyI}>
                Buy <br> 
                {$current_item.price} Coins
            </div>
        {/if}
        
    </div>
{/if}



<style>
    .container {
        height: 100%;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-template-areas: "description buy";
        overflow: hidden;
        
        grid-area: itemI;
    }

    .title {
        grid-area: title;
        padding: 0 .5rem;
        
    }

    .delete {
        width: 3ch;
        background-color: var(--red);
    }

    .description {
        grid-area: description;
        padding: 1rem;
    }

    .buy {
        grid-area: buy;
        background-color: var(--green);
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
</style>
