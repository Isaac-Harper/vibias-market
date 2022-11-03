<script lang="ts">
    let toggled = false
    
    function toggle() {
        toggled = !toggled
    }
</script>



<div class="container element--border--primary">
    <slot name="title" on:click={toggle}></slot>
    
    {#if toggled}
        <slot name="body">body</slot>
    {/if}
</div>



<style>
    .container {
        width: 100%;
    }
</style>