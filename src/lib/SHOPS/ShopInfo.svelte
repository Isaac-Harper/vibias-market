<script lang="ts">
    import {item_list, current_shop, current_item, deleteShop, user, newItem} from "$lib/db"
    import { slide } from 'svelte/transition';
    import ShopSettings from "$lib/SHOPS/ShopSettings.svelte"
	import ItemList from "$lib/ITEMS/ItemList.svelte";

    
    $: current_items = $item_list.filter(v => v.shop_id === $current_shop.id)
    
    
    
    function toggle_item(item) {
        if ( item == $current_item) {
            current_item.set({id: 0, creator_id: "", shop_id: "", name: "", description: "", price: 0})
        } else {
            current_item.set(item)
        }
    }

    function deleteS() {
        deleteShop($current_shop.id)
    }

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
        gap: 1rem;
        padding: 1rem;  


    }

    input {
        max-width: 10rem;
    }

    .newItem {
        background-color: var(--blue);
        flex: 0 0 3rem;
    }

    .body {
        grid-area: body;
    }

    
    .list {
        grid-area: list;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        max-height: 18rem;
        width: 8rem;
    }
    .item {
        flex: 0 0 5rem;
        display: flex;
        
        justify-content: center;
        align-items: center;
        margin: .2rem 0;

    }

    .create {
        background-color: var(--blue);
        width: 6rem;
    }
    
    .selected {
        background-color: var(--red);
    }
</style>