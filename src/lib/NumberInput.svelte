<script lang="ts">
    export let value = 0
    export let title = "No Title"
</script>


<div class="container element--border--primary">
    <h4>{title}</h4>
    <input class="element--border--primary" type="number" bind:value >
</div>



<style>
    .container {
        padding: var(--med-space);
        display: grid;
        grid-template-columns: 1fr auto;
    }
    input {
        width: 100%;
        padding: var(--med-space);
        grid-area: 2 / 1 / 3 / 3;
    }
</style>