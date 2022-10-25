<script lang="ts">
    import {shop_list, current_market, current_shop, current_item, deleteMarket, user, init, newMarket, newShop, patron_list} from "$lib/db"

    
    $: current_shops = $shop_list.filter(v => v.market_id === $current_market.id)
    
    $: markets_patrons = $patron_list.filter(v => v.market_id === $current_market.id)
    $: current_patron = markets_patrons.filter(v => v.player_id === $user.id)[0]
    
    
    function toggle_shop(shop) {
        if ( shop == $current_shop) {
            current_shop.set({id: 0, creator_id: "", market_id: "", name: "", description: ""})
        } else {
            current_shop.set(shop)
        }
        
        current_item.set({id: 0, creator_id: "", shop_id: "", name: "", description: "", price: 0})
    }

    function deleteM() {
        deleteMarket($current_market.id)
    }

    function toggleNewShop() {
        creating_new_shop = !creating_new_shop
    }

    function createNewShop() {
        newShop(new_shop_name, new_shop_description, $user.id, $current_market.id)
        
        new_shop_name = ""
        new_shop_description = ""

        toggleNewShop()
    }

    let new_shop_name = ""
    let new_shop_description = ""
    let creating_new_shop = false
</script>


{#if $current_market.id !== 0 }
    <div class="container element--border--primary"> 
        <div class="body">
            {#if creating_new_shop}

            <div style="display: flex; flex-direction: column;">
                <h4>Creating New Shop</h4>
                <p>Shop Name:</p>
                <input type="text" bind:value={new_shop_name}>
                <p>Shop Descriptiion:</p>
                <input type="text" bind:value={new_shop_description}>
                <button class="create element--border--primary" on:click={createNewShop}>Create!</button>
            </div>
                
            {:else}
                <h3>
                    {$current_market.name}
                    
                    {#if $user.id === $current_market.creator_id}
                        <button class="delete_button element--border--primary" on:click={() => deleteM()}>x</button>
                        <button class="settings_button element--border--primary">⚙</button>
                    {/if}
                </h3>
                {#if $user.id !== $current_market.creator_id}
                    Coins: {current_patron.coins}
                {/if}
                
                <p>{$current_market.description}</p> 

                
            {/if}
        </div>
        
        
        <div class="list">
            {#if $user.id === $current_market.creator_id}
                {#if creating_new_shop}
                    <button on:click={toggleNewShop} class="newItem element--border--primary">Cancel New Shop</button>
                {:else}
                    <button on:click={toggleNewShop} class="newItem element--border--primary">New Shop</button>
                {/if}
            {/if}
            {#each current_shops as shop}
                <div on:click={() => toggle_shop(shop)}  class="item element--border--primary" class:selected="{shop  === $current_shop}">
                    {shop.name}
                </div>        
            {/each}
        </div>
    </div>
{/if}


<style>
    .container {
        max-height: 18rem;
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-areas: "body      list";
                             
        grid-area: marketI;   

        margin-left: 1rem;
    }

    input {
        max-width: 10rem;
    }


    .body {
        grid-area: body;
        padding: 1rem;
        width: 100%;
    }

 
    
    .list {
        grid-area: list;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;

        padding: .5rem;
        height: 100%;
        width: 12rem;
    }
    .item {
        flex: 0 0 5rem;
        display: flex;
        
        justify-content: center;
        align-items: center;
        margin: .2rem 0;

    }
    .newItem {
        background-color: var(--blue);
        flex: 0 0 3rem;
    }
    .settings {
        width: 3ch;
        background-color: var(--red);
    }

    .create {
        background-color: var(--blue);
        width: 6rem;
    }
    
    .selected {
        background-color: var(--red);
    }
    
</style>