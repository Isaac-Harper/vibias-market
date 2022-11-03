<script lang="ts">
	import TextInput from '../TextInput.svelte';
    import {current_market, market_list, newMarket, user, resetMarket, resetShop, joinMarket} from "$lib/db"
	import TextArea from "../TextArea.svelte";
	import ToggleText from '../ToggleText.svelte';
	import Inventory from '$lib/MARTKETS/Inventory.svelte';


    function toggle_market(market) {
        if ( market == $current_market) {
            resetMarket()
        } else {
            creatingNew = false
            joiningNew = false
            current_market.set(market)
            resetShop()
        }
    }

    function toggleCreate() {
        joiningNew = false
        creatingNew = !creatingNew
        resetMarket()
    }

    function toggleJoin() {
        creatingNew = false
        joiningNew = !joiningNew
        resetMarket()
    }

    
    function createNew(name, description) {
        newMarket(name, description, $user.id)
        creatingNew = false
    }

    function joinNew(join_id) {
        joinMarket(join_id)
        joiningNew = false
    }

    let creatingNew = false
    let joiningNew = false
    let new_market_name = ""
    let new_market_description = ""
    let join_id = ""
</script>




<div class="holder element--border--primary" class:creating_new="{creatingNew === true}">
    <div class="title">
        <h3>Markets</h3>
        <button class="modifier element--border--primary" on:click={toggleCreate}>
            <ToggleText value={creatingNew} on="Cancel" off="New"/>
        </button> 
        <div class="modifier element--border--primary" on:click={toggleJoin}>
            <ToggleText value={joiningNew} on="Cancel" off="Join"/>
        </div> 
    </div>
    
    <div class="horizontal_list aa" >
        {#each $market_list as market}
            <div on:click={() => toggle_market(market)} class="horizontal_list_item element--border--primary" class:selected="{market  === $current_market}">
                {market.name}
            </div>
        {/each}
    </div>
    
    
    {#if creatingNew} 
        <div class="new_input">
            <TextInput title="Name" bind:value={new_market_name}></TextInput>
            <TextArea title="Description" bind:value={new_market_description}></TextArea>
            <div><button on:click={() => createNew(new_market_name, new_market_description)}>Create</button></div>
        </div>
    {/if}

    {#if joiningNew} 
        <div class="new_input">
            <TextInput title="Join ID" bind:value={join_id}></TextInput>
            <div><button on:click={() => joinNew(join_id)}>Join</button></div>
        </div>
    {/if}

    <Inventory/>
</div>


<style>
    .holder {
        display: grid;
        gap: .5rem;
        padding: .5rem;
    }

    .title {
        display: flex;
        gap: .5rem;
    }

    .new_input{
        display: grid;
        gap: .5rem;
    } 

    .modifier {
        height: 2rem;
        flex: 0 0 6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--blue);
        
    } 
    
    .selected {
        background-color: var(--red);
    }
    
</style>