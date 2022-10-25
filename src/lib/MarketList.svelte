<script lang="ts">
    import {current_market, current_shop, current_item, market_list, newMarket, user, init} from "$lib/db"



    function toggle_market(market) {
        if ( market == $current_market) {
            current_market.set({id: 0, creator_id: "", patrons: [], name: "", description: ""})
            
        } else {
            current_market.set(market)
        }
        
        current_shop.set({id: 0, creator_id: "", market_id: "", name: "", description: ""})
        current_item.set({id: 0, creator_id: "", shop_id: "", name: "", description: "", price: 0})
        
    }

    function toggleNew() {
        creatingNew = !creatingNew
        current_market.set({id: 0, creator_id: "", patrons: [], name: "", description: ""})
        current_shop.set({id: 0, creator_id: "", market_id: "", name: "", description: ""})
        current_item.set({id: 0, creator_id: "", shop_id: "", name: "", description: "", price: 0})
        
    }
    
    function createNew(name, description) {
        newMarket(name, description, $user.id)
        creatingNew = false

    }
    let creatingNew = false

    let new_market_name = ""
    let new_market_description = ""
</script>




<div class="holder element--border--primary" class:creating_new="{creatingNew === true}">
    <h3>Markets</h3>

    <button class="modifier element--border--primary" on:click={toggleNew}>
        {#if creatingNew} 
            Cancel
        {:else}
            New
        {/if} 
    </button> 
    <div class="modifier element--border--primary">Join</div> 
    
    {#if creatingNew} 
        <div class="new_input">
            <h3>New Market Name</h3>
            <input type="text" bind:value={new_market_name}>
            <h3>New Market Description</h3>
            <input type="text" bind:value={new_market_description}>
            <button on:click={() => createNew(new_market_name, new_market_description)}>Create</button>
        </div>
    {:else}
        <div class="container" >
            {#each $market_list as market}
                <div on:click={() => toggle_market(market)} class="item element--border--primary" class:selected="{market  === $current_market}">
                    {market.name}
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .holder {

        grid-area: marketL;
        height: 100%;
        display: grid;
        
        grid-template-rows: 3rem 1fr;
        grid-template-columns: 2fr 1fr 1fr;
        align-items: center;


        grid-area: 3 / 1 / 4 / 3;
    }

    .creating_new {
        grid-area: 3 / 1 / 5 / 3;
    }

    h3 {
        padding: 0 .5rem;
    }
    
    .container {
        display: flex;
        overflow-x: scroll;
        padding: 0;
        padding: 0 .3rem .5rem;

        height: 100%;

        grid-area: 2 / 1 / 3 / 4;
    }

    .new_input{ 
        grid-area: 2 / 1 / 3 / 4;
    }

    .item {
        height: 100%;
        flex: 0 0 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 .2rem;

    }
    
    .modifier {
        height: 2rem;
        width: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--blue);
    } 
    
    .selected {
        background-color: var(--red);
    }
</style>