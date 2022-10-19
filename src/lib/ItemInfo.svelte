<script lang="ts">
    export let active_item = {}
     
</script>


{#if active_item != {} } 
    <div class="container element--border--primary">
        <div class="title">
            <h3>{active_item.name}</h3> 
        </div>
        <div class="description">{active_item.description}</div>
        <div class="buy">
            Buy <br> 
            {active_item.price} Coins
        </div>
    </div>
{/if}



<style>
    .container {
        height: 100%;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-template-rows: 1fr 2fr;
        grid-template-areas: "title buy"
                             "description buy";
        overflow: hidden;
        
        grid-area: itemI;
    }

    .title {
        grid-area: title;
        padding: 0 .5rem;
        
    }

    .description {
        grid-area: description;
        padding: 0 .5rem;
    }

    .buy {
        grid-area: buy;
        background-color: var(--green);
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
</style>
