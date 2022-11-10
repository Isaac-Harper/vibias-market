
<script lang="ts">
    import { user, newShop, current_market, state } from "../db";
	import TextArea from "../TextArea.svelte";
	import TextInput from "../TextInput.svelte";

    let new_shop_name = ""
    let new_shop_description = ""

    function toggleNewShop() {
		$state.create_shop_open = !$state.create_shop_open
    }

    function createNewShop() {
        newShop(new_shop_name, new_shop_description, $user.id, $current_market.id)
        
        new_shop_name = ""
        new_shop_description = ""

        toggleNewShop()
    }
</script>

<div class="new_shop">
	<button on:click={toggleNewShop}>Create new Shop</button>
</div>

{#if $state.create_shop_open}
	<div class="container">
		<h3>Creating New Shop</h3>
		<TextInput title="Shop Name:" bind:value={new_shop_name}/>
		<TextArea title="Shop Description:" bind:value={new_shop_description}/>
		<button class="create element--border--primary" on:click={createNewShop}>Create!</button>
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