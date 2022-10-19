<script lang="ts">
    export let elements = []

</script>


<div class="container">
    
    
    {#each elements as element}
        <div class="item element--border--primary">
            {element.name}
        </div>
    
    {/each}

</div>

<style>
    .container {
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
    
    
</style>