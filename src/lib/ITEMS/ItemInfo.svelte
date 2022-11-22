<script lang="ts">
     
    import { state, buyItem, current_item, current_market, user, patron_list, openItemEdit} from "$lib/db"
	import ItemSettings from "./ItemSettings.svelte";
    import { slide } from 'svelte/transition';
    import Primary from '$lib/Buttons/Primary.svelte';

    function buyI() {
        buyItem( $current_item.id, current_patron.id )
    }

    $: markets_patrons = $patron_list.filter(v => v.market_id === $current_market.id)
    $: current_patron = markets_patrons.filter(v => v.player_id === $user.id)[0]

    function openItemSettings() {
        openItemEdit()
    }
</script>


{#if $state.item_open} 
    <div class="container" transition:slide|local>
        {#if !$state.edit_item_open}
            <h3 class="title">{$current_item.name}</h3>  
            <p><b>{$current_item.price} Coins</b></p>
            <p>{$current_item.description}</p>
                
            

            {#if $user.id === $current_market.creator_id}
                <Primary text="open settings" func={openItemSettings}/>
            {:else}
                <Primary text="Buy" func={buyI}/>
            {/if} 
        {/if}

        <ItemSettings/>
    </div>
{/if}



<style>
    .container {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        
        padding: var(--med-space);

        background-color: var(--card-dark);
        
        color: var(--normal-font-dark);
        box-shadow: var(--card-border-shadow);
    }
</style>
