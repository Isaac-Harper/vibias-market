
<script lang="ts">
    import NumberInput from "$lib/NumberInput.svelte";
import { user, current_shop, state, openShop, newItem } from "../db";
	import TextArea from "../TextArea.svelte";
	import TextInput from "../TextInput.svelte";

    let new_item_name = ""
    let new_item_description = ""
    let new_item_price = 0



    function createNewItem() {
        newItem(new_item_name, new_item_description, new_item_price, $user.id, $current_shop.id)
        
        new_item_name = ""
        new_item_description = ""
        new_item_price = 0

        openShop()
    }

    function closeItemCreation() {
        openShop()
    }
</script>


{#if $state.create_item_open}
	<div class="container">
		<h3>Creating New Item</h3>
		<TextInput title="Shop Name:" bind:value={new_item_name}/>
		<TextArea title="Shop Description:" bind:value={new_item_description}/>
        <NumberInput title="Item Price:" bind:value={new_item_price}/>
		<button class="create element--border--primary" on:click={createNewItem}>Create!</button>
        <button on:click={closeItemCreation}>Cancel create</button>
	</div>
{/if}


<style>

    .container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    
    .create {
        background-color: var(--blue);
        width: 6rem;
    }
    
</style>