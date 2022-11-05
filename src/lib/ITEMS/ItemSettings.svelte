<script lang="ts">
    import { get } from 'svelte/store'
    import {user, current_item, updateItem, deleteItem } from "$lib/db"
    import TextInput from "$lib/TextInput.svelte"
    import TextArea from "$lib/TextArea.svelte"
    import Dropdown from "$lib/Dropdown.svelte"
    
    let new_item = get(current_item)
    
    function setValues() {
        new_item = get(current_item)
    }
    
    function deleteI() {
        deleteItem($current_item.id)
    }

</script>


{#if $current_item.creator_id === $user.id }
 <div class="container"> 
    <Dropdown>
       <span slot="title">Item Settings:</span>
       <div slot="body">
          <TextInput title="Item Name" bind:value={new_item.name}></TextInput>
          <TextArea title="Item Description" bind:value={new_item.description}></TextArea>
          <button on:click={() => updateItem(new_item)}>Apply</button>
          <button class="delete_button element--border--primary" on:click={() => deleteI()}>Delete</button>
       </div>
    </Dropdown>
 </div>
{/if}


<style>
 .container {
    grid-area: sets;
 } 

</style>