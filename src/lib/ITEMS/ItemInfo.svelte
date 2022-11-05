<script lang="ts">
     
    import {buyItem, current_item, current_market, deleteItem, user, patron_list} from "$lib/db"
	import ItemSettings from "./ItemSettings.svelte";
    import { slide } from 'svelte/transition';
    
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
    <div class="container element--border--primary" transition:slide|local>
        <h3>{$current_item.name}</h3>  
        <p><b>{$current_item.price} Coins</b></p>
        <p>{$current_item.description}</p>
                
        {#if $user.id !== $current_market.creator_id}
            <div class="buy_button element--border--primary" on:click={buyI}>Buy</div>
        {/if} 

        <ItemSettings/>
    </div>
{/if}



<style>
    .container {
        height: 100%;
        overflow: hidden;
        width: 100%;

        padding: 1rem;
    }
    
    

    
</style>
