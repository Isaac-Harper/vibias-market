<script lang="ts">
	import { updateMarket, updateShop, updateItem, openMarket, openShop, openItem} from '$lib/db';

    export let type
    export let obj
	
	
	function applyMarket() {
		updateMarket(obj)
		openMarket()
	}
	
	function applyShop() {
		updateShop(obj)
		openShop()
	}
	
	function applyItem() {
		updateItem(obj)
		openItem()
	}
</script>

{#if type === "market"}
    <button class="apply_button element--border--primary" on:click={applyMarket}>Apply</button>
{:else if type === "shop"}
    <button class="apply_button element--border--primary" on:click={applyShop}>Apply</button>
{:else if type === "item"}
    <button class="apply_button element--border--primary" on:click={applyItem}>Apply</button>
{/if}


<style>
    .apply_button{
        width: 8rem;
        padding: var(--med-space);
        background-color: var(--apply-button);
        
            
        display: flex;
        justify-content: center;
    }
</style>