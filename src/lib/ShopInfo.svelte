<script lang="ts">
    import {item_list, current_shop, current_item} from "$lib/db"

    
    $: current_items = $item_list.filter(v => v.shop_id === $current_shop.id)
    
    
    
    function toggle_item(item) {
        if ( item == $current_item) {
            current_item.set({})
        } else {
            current_item.set(item)
        }
    }
</script>



{#if Object.keys($current_shop).length !== 0 }
    <div class="container element--border--primary">
        <div class="body">
            <h3>{$current_shop.name}</h3>
            <p>{$current_shop.description}</p>
        </div>
        
        <div class="list">
            {#each current_items as item}
                <div on:click={() => toggle_item(item)}  class="item element--border--primary" class:selected="{item  === $current_item}">
                    {item.name}
                </div>
            
            {/each}
        </div>
    </div>
{/if}

<style>
    .container {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr 8fr;
        grid-template-areas: "body     list"
                             "body      list";

        height: 100%;
        
        grid-area: shopI;
    }

    .title {
        grid-area: title;
    }

    .body {
        grid-area: body;
        padding: 1rem;
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