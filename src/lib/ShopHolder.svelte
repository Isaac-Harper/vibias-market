<script lang="ts">
    import Shop from "$lib/Shop.svelte";
	import { user, newShop} from "$lib/db";

    export let active_market_id: number
    export let shops: any[]

    export let current_market: any[]



    let creating_new = false

    let name: string
    let description: string

    function toggleCreate() {
        if (creating_new) {
            creating_new = false
        } else {
            creating_new = true
        }
    }


    function createNew() {
        newShop(name, description, $user.id, active_market_id)
        name = ''
        description = ''
        creating_new = false
    }

    $: active_shops = shops.filter(value => value.market_id === active_market_id)
</script>

{#if active_market_id != 0}
    <div class="container">
        <h3>Shops</h3>
        {#if creating_new}
            <button on:click={toggleCreate}>View shops</button>
            <div class="flex">
                <input type="text" name="name" id="name" bind:value={name} placeholder="name">
                <input type="text" name="description" id="description" bind:value={description} placeholder="description">
                <button on:click={() => createNew()}>Create</button>
            </div>
        {:else}
            

            {#if current_market[0].creator_id === $user.id}
                <button on:click={toggleCreate}>Create new shop</button>
            {/if}


            <div class="flex">
                {#each active_shops as shop}
                    {#if shop.creator_id === $user.id}
                        <Shop name={shop.name} description={shop.description} id={shop.id} owner></Shop>
                    {:else}
                        <Shop name={shop.name} description={shop.description} id={shop.id}></Shop>
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
    }
</style>