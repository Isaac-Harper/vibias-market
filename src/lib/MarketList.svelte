<script lang="ts">
	import HorizontalList from "./HorizontalList.svelte";
    import {current_market} from "$lib/db"
    
    export let markets
    export let active_market
    
    
    function toggle_market(market) {
        console.log(market)
        console.log(active_market)
        if ( market == active_market) {
            currenr_market.set({})
        } else {
            current_market.set(market)
        }
    }
</script>




<div class="holder element--border--primary">
    <h3>Markets</h3>
    
    <div class="container">
        {#each markets as element}
            <div on:click={() => toggle_market(element)} class="item element--border--primary">
                {element.name}
            </div>
    
        {/each}
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
</style>