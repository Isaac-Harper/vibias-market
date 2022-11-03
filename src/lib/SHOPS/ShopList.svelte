<script lang="ts">
    export let current_shops
    export let creating_new_shop
    
    import { user, current_market, current_shop, resetShop, resetItem } from "../db"



    function toggle_shop(shop) {
        if ( shop == $current_shop) {
            resetShop()
        } else {
            current_shop.set(shop)
            resetItem()
        }
    }

    function toggleNewShop() {
        creating_new_shop = !creating_new_shop
    }


</script>

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


<style> 
    .list {
        grid-area: list;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;

        padding: .5rem;
        width: 8rem;
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

</style>