<script lang="ts">

    export let elements = []
</script>


<div class="container">


    {#each elements as element}
        <div class="item element--border--primary">
            {element}
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
        margin: 0 .2rem;

    }
</style>