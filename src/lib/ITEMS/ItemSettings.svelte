<script lang="ts">
	import NumberInput from './../NumberInput.svelte';
    import {user, current_item  } from "$lib/db"
    import TextInput from "$lib/TextInput.svelte"
    import TextArea from "$lib/TextArea.svelte"
    import Dropdown from "$lib/Dropdown.svelte"
	import DeleteButton from '$lib/DeleteButton.svelte';
	import ApplyButton from '$lib/ApplyButton.svelte';
    
    $: new_item = $current_item
</script>


{#if $current_item.creator_id === $user.id }
    <div class="container"> 
        <Dropdown>
        <span slot="title">Item Settings:</span>
        <div slot="body" class="body">
            <TextInput title="Item Name" bind:value={new_item.name}></TextInput>
            <TextArea title="Item Description" bind:value={new_item.description}></TextArea>
            <NumberInput title="Price" bind:value={new_item.price}/>
            <ApplyButton type="item" obj={new_item}/>
            <DeleteButton type="item" id={$current_item.id}/>
        </div>
        </Dropdown>
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
</style>