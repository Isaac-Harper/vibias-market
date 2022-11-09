<script lang="ts">
    export let value = ""
    export let title = "No Title"
    export let maxlength = 150
</script>




<div class="container">
    <h4>{title} </h4>
    <p>{value.length}/{maxlength}</p>
    <textarea class="element--border--primary" type="text" bind:value maxlength={maxlength}></textarea>
</div>


<style>
    .container {
        height: 12rem;
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-columns: 1fr auto;
    }
    textarea {
        width: 100%;
        padding: var(--med-space);
        grid-area: 2 / 1 / 3 / 3;
    }
</style>