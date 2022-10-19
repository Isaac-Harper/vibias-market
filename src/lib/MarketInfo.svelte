<script lang="ts">
    import {shop_list, current_market, current_shop} from "$lib/db"

    
    $: current_shops = $shop_list.filter(v => v.market_id === $current_market.id)
    
    
    
    function toggle_shop(shop) {
        if ( shop == $current_shop) {
            current_shop.set({})
        } else {
            current_shop.set(shop)
        }
    }
</script>


{#if Object.keys($current_market).length !== 0 }
    <div class="container element--border--primary"> 
        <div class="title">
            <h3>{$current_market.name}</h3>
        </div>
        <div class="body">
            <p>{$current_market.description}</p> 
        </div>
        
        
        <div class="list">
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
        height: 100%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr 8fr;
        grid-template-areas: "title     list"
                             "body      list";
                             
        grid-area: marketI;   

    }

    .title {
        grid-area: title;
        padding: 0 .5rem;
        
    }


    .body {
        grid-area: body;
        padding: 0 .5rem;
    }
 
    
    .list {
        grid-area: list;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;

        padding: .5rem;
        height: 100%;
    }
    .item {
        flex: 0 0 5rem;
        display: flex;
        
        justify-content: center;
        align-items: center;
        margin: .2rem 0;

    }
    
    .selected {
        background-color: var(--red);
    }
    
</style>