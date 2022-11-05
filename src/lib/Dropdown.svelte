<script lang="ts">
	import ToggleText from '$lib/ToggleText.svelte';
    import { slide } from 'svelte/transition';

    let toggled = false
    
    function toggle() {
        toggled = !toggled
    }
</script>



<div class="container element--border--primary" >
    <div class="title" on:click={toggle} class:hovered={toggled}>
        <h3><ToggleText value={toggled} on="▼" off="▶"/> <slot name="title"></slot></h3>
    </div>
    {#if toggled}
        <div class="body" transition:slide|local>
            <slot name="body">body</slot>
        </div>
        
    {/if}
</div>



<style>
    .container {
        width: 100%;

    }

    .title {
        cursor: pointer;
        padding: 1rem;
        z-index: 20 ;
    }

    .body {
        padding: 1rem;
    }


</style>