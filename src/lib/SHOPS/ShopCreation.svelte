
<script lang="ts">
    import { user, newShop, current_market, state, openMarket } from "../db";
	import TextArea from "../TextArea.svelte";
	import TextInput from "../TextInput.svelte";

    let new_shop_name = ""
    let new_shop_description = ""


    function createNewShop() {
        newShop(new_shop_name, new_shop_description, $user.id, $current_market.id)
        
        new_shop_name = ""
        new_shop_description = ""

        openMarket()
    }

    function closeShopCreation() {
        openMarket()
    }
</script>


{#if $state.create_shop_open}
	<div class="container">
		<h3 class="title">Creating New Shop</h3>
		<TextInput title="Shop Name:" bind:value={new_shop_name}/>
		<TextArea title="Shop Description:" bind:value={new_shop_description}/>
		<button class="create element--border--primary" on:click={createNewShop}>Create!</button>
        <button on:click={closeShopCreation}>Cancel create</button>
	</div>
{/if}


<style>

    .container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    
    .create {
        background-color: var(--blue);
        width: 6rem;
    }
    
</style>