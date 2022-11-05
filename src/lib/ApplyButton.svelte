<script lang="ts">
	import { updateMarket, updateShop, updateItem } from '$lib/db';

    export let type
    export let obj
</script>

{#if type === "market"}
    <button class="apply_button element--border--primary" on:click={() => updateMarket(obj)}>Apply</button>
{:else if type === "shop"}
    <button class="apply_button element--border--primary" on:click={() => updateShop(obj)}>Apply</button>
{:else if type === "item"}
    <button class="apply_button element--border--primary" on:click={() => updateItem(obj)}>Apply</button>
{/if}


<style>
    .apply_button{
        width: 8rem;
        padding: var(--med-space);
        background-color: var(--blue);
        
            
        display: flex;
        justify-content: center;
    }
</style>