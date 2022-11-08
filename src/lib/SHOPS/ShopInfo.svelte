<script lang="ts">
    import {item_list, current_shop, user, newItem} from "$lib/db"
    import { slide } from 'svelte/transition';
    import ShopSettings from "$lib/SHOPS/ShopSettings.svelte"
	import ItemList from "$lib/ITEMS/ItemList.svelte";
	import HorizontalList from "$lib/MARKETS/HorizontalList.svelte"

    
    $: current_items = $item_list.filter(v => v.shop_id === $current_shop.id)
    

    function toggleNewItem() {
        creating_new_item = !creating_new_item
    }

    function createNewItem() {
        newItem(new_item_name, new_item_description, new_item_price, $user.id, $current_shop.id)

        new_item_name = ""
        new_item_description = ""
        new_item_price = 0

        toggleNewItem()
    }






    let new_item_name = ""
    let new_item_description = ""
    let new_item_price = 0
    let creating_new_item = false
</script>



{#if $current_shop.id !== 0 }
    <div class="container element--border--primary" transition:slide|local>
        <div class="body">
            {#if creating_new_item}
                <div style="display: flex; flex-direction: column;">
                    <h4>Creating New Item</h4>
                    <p>Item Name:</p>
                    <input type="text" bind:value={new_item_name}>
                    <p>Item Descriptiion:</p>
                    <input type="text" bind:value={new_item_description}>
                    <p>Item Price:</p>
                    <input type="number" bind:value={new_item_price}>
                    <button class="create element--border--primary" on:click={createNewItem}>Create!</button>
                </div>
            {:else}
                <h3>{$current_shop.name}</h3>
                
                <p>{$current_shop.description}</p>
            {/if}
        </div>
        
		<HorizontalList content={current_items} list="item"/>

        <ItemList current_items={current_items} bind:creating_new_item={creating_new_item}/>
        <ShopSettings/> 
    </div>
{/if}

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-areas: "body  list"
                             "sets  sets";
        gap: var(--med-space);
        padding: var(--med-space);

        background-color: var(--card-dark);
        color: var(--normal-font-dark);
        box-shadow: var(--card-border-shadow);
    }

    input {
        max-width: 10rem;
    }
    .body {
        grid-area: body;
    }

    .create {
        background-color: var(--blue);
        width: 6rem;
    }
    
</style>