<script lang="ts">
	import { deleteMarket, deleteShop, deleteItem } from '$lib/db';

    export let type
    export let id
</script>

{#if type === "market"}
    <button class="delete_button element--border--primary" on:click={() => deleteMarket(id)}>Delete</button>
{:else if type === "shop"}
    <button class="delete_button element--border--primary" on:click={() => deleteShop(id)}>Delete</button>
{:else if type === "item"}
    <button class="delete_button element--border--primary" on:click={() => deleteItem(id)}>Delete</button>
{/if}


<style>
    .delete_button{
        width: 8rem;
        padding: var(--med-space);
        background-color: var(--delete-button);
        
            
        display: flex;
        justify-content: center;
    }
</style>