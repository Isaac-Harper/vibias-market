<script lang="ts">
	import NumberInput from './../NumberInput.svelte';
    import {current_item, state, openItem  } from "$lib/db"
    import TextInput from "$lib/TextInput.svelte"
    import TextArea from "$lib/TextArea.svelte"
	import DeleteButton from '$lib/DeleteButton.svelte';
	import ApplyButton from '$lib/ApplyButton.svelte';
    
    $: new_item = $current_item

    function closeSettings() {
		openItem()
	}
</script>


{#if $state.edit_item_open }
    <div class="container"> 
        <h3>Item Settings:</h3>
        <div class="body">
            <TextInput title="Item Name" bind:value={new_item.name}></TextInput>
            <TextArea title="Item Description" bind:value={new_item.description}></TextArea>
            <NumberInput title="Price" bind:value={new_item.price}/>
            <div class="flex">
                <ApplyButton type="item" obj={new_item}/>
                <DeleteButton type="item" id={$current_item.id}/>
            </div>
            <button on:click={closeSettings}>close settings</button>
        </div>
    </div>
{/if}


<style>
    .container {
        grid-area: sets;
    } 

    .body {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .flex {
        display: flex;
    }
</style>