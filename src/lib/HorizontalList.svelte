<script lang="ts">

    import {current_market} from "$lib/db"

    export let elements = []
    
    function open_market(market) {
        current_market.set(market)
    }
    
</script>


<div class="container">


    {#each elements as element}
        <div on:click={() => open_market(element)} class="item element--border--primary">
            {element.name}
        </div>
    
    {/each}
</div>

<style>
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
        margin: 0 .f2rem;

    }
</style>