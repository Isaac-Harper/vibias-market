<script lang="ts">
      import { get } from 'svelte/store'
      import {user, current_shop, updateShop, deleteShop } from "$lib/db"
      import TextInput from "$lib/TextInput.svelte"
      import TextArea from "$lib/TextArea.svelte"
      import Dropdown from "$lib/Dropdown.svelte"
      
      let new_shop = get(current_shop)
      
      function setValues() {
         new_shop = get(current_shop)
      }
      
      function deleteS() {
        deleteShop($current_shop.id)
      }

</script>


{#if $current_shop.creator_id === $user.id }
   <div class="container"> 
      <Dropdown>
         <h3 slot="title">Shop Settings:</h3>
         <div slot="body">
            <TextInput title="Shop Name" bind:value={new_shop.name}></TextInput>
            <TextArea title="Shop Description" bind:value={new_shop.description}></TextArea>
            <button on:click={() => updateShop(new_shop)}>Apply</button>
            <button class="delete_button element--border--primary" on:click={() => deleteS()}>Delete</button>
         </div>
      </Dropdown>
   </div>
{/if}


<style>
   .container {
      grid-area: sets;
      
   } 

</style>