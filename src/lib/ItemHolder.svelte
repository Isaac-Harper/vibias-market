<script lang="ts">
    import Item from "$lib/Item.svelte";
	import { newItem, user } from "$lib/db";

    export let active_shop_id: number
    export let items: any[]

    export let current_market: any[]


    let creating_new = false

    let name: string
    let description: string
    let price: number

    function toggleCreate() {
        if (creating_new) {
            creating_new = false
        } else {
            creating_new = true
        }
    }


    function createNew() {
        newItem(name, description, price, $user.id, active_shop_id)
        name = ''
        description = ''
        price = 0
        creating_new = false
    }


    $: active_items = items.filter(value => value.shop_id === active_shop_id)
</script>

{#if active_shop_id != 0}
    <div class="container">
        <h3>Items</h3>
        {#if creating_new}
            <button on:click={toggleCreate}>View items</button>
            <div class="flex">
                <input type="text" name="name" id="name" bind:value={name} placeholder="name">
                <input type="text" name="description" id="description" bind:value={description} placeholder="description">
                <input type="number" name="price" id="price" bind:value={price}>
                <button on:click={() => createNew()}>Create</button>
            </div>
        {:else}
            
            {#if current_market[0].creator_id === $user.id}
                <button on:click={toggleCreate}>Create new shop</button>
            {/if}
            <div class="flex">
                {#each active_items as item}
                    {#if item.creator_id === $user.id}
                        <Item name={item.name} description={item.description} id={item.id} price={item.price} owner></Item>
                    {:else}
                        <Item name={item.name} description={item.description} id={item.id} price={item.price}></Item>
                    {/if}
                {/each}
            </div>
        {/if}
    </div>
{/if}




    


<style>
    .container {
        margin: 2rem;
        padding: 2rem;
        border: solid;
        border-radius: 2rem;
    }

    .flex {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
    }
</style>