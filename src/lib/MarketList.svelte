<script lang="ts">
    import {current_market, current_shop, current_item, market_list} from "$lib/db"
    
    function toggle_market(market) {
        if ( market == $current_market) {
            current_market.set({})
        } else {
            current_market.set(market)
        }
        
        current_item.set({})
        current_shop.set({})
    }
</script>




<div class="holder element--border--primary">
    <h3>Markets</h3>
    
    <div class="container">
        {#each $market_list as market}
            <div on:click={() => toggle_market(market)} class="item element--border--primary" class:selected="{market  === $current_market}">
                {market.name}
            </div>
        {/each}
        
        <div class="modifier element--border--primary">New</div> 
        <div class="modifier element--border--primary">Join</div> 
    </div>
</div>

<style>
    .holder {

        grid-area: marketL;
        height: 100%;
        display: flex;
        flex-direction: column;

        grid-area: marketL;
        
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
        height: 100%;
        flex: 0 0 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 .2rem;
    } 
    
    .selected {
        background-color: var(--red);
    }
</style>