<script lang="ts">
    import { state, openItemCreate, openShop, item_list, current_shop, user, newItem} from "$lib/db"
    import { slide } from 'svelte/transition';
    import ShopSettings from "$lib/SHOPS/ShopSettings.svelte"
	import ItemList from "$lib/ITEMS/ItemList.svelte";
	import HorizontalList from "$lib/MARKETS/HorizontalList.svelte";

    
    $: current_items = $item_list.filter(v => v.shop_id === $current_shop.id)
    

    function toggleNewItem() {
		openItemCreate()
    }

    function createNewItem() {
        newItem(new_item_name, new_item_description, new_item_price, $user.id, $current_shop.id)

        new_item_name = ""
        new_item_description = ""
        new_item_price = 0

        openShop()
    }
	
	function cancelCreate() {
		openShop()
	}






    let new_item_name = ""
    let new_item_description = ""
    let new_item_price = 0
</script>



{#if $state.shop_open }
    <div class="container element--border--primary" transition:slide|local>
        <div class="body">
            {#if $state.create_item_open }
                <div style="display: flex; flex-direction: column;">
                    <h4>Creating New Item</h4>
                    <p>Item Name:</p>
                    <input type="text" bind:value={new_item_name}>
                    <p>Item Descriptiion:</p>
                    <input type="text" bind:value={new_item_description}>
                    <p>Item Price:</p>
                    <input type="number" bind:value={new_item_price}>
                    <button class="create element--border--primary" on:click={createNewItem}>Create!</button>
					<button class="create element--border--primary" on:click={cancelCreate}>Create!</button>
                </div>
            {:else}
                <h3>{$current_shop.name}</h3>
                
                <p>{$current_shop.description}</p>
				<button on:click={toggleNewItem}>Create</button>
            {/if}
        </div>
        
		<HorizontalList content={current_items} list="item"/>

        <ShopSettings/> 
    </div>
{/if}

<style>
    .container {
        display: flex;
		flex-direction: column;
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