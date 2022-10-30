<script lang="ts">
    export let value = ""
    export let title = "No Title"
    export let maxlength = 36
</script>


<div class="container element--border--primary">
    <h4>{title}</h4>
    <p>{value.length}/{maxlength}</p>
    <input class="element--border--primary" type="text" bind:value maxlength={maxlength}>
</div>



<style>
    .container {
        padding: .5rem;
        display: grid;
        grid-template-columns: 1fr auto;
    }
    input {
        width: 100%;
        padding: .5rem;
        grid-area: 2 / 1 / 3 / 3;
    }
</style>