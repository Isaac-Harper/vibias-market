<script lang="ts">
      import { get } from 'svelte/store'
      import {user, current_shop, updateShop} from "$lib/db"
      import TextInput from "$lib/TextInput.svelte"
      import TextArea from "$lib/TextArea.svelte"
      import Dropdown from "$lib/Dropdown.svelte"
      
      let new_shop = get(current_shop)
      
      function setValues() {
         new_shop = get(current_shop)
      }

</script>


{#if $current_shop.creator_id === $user.id }
      <details class="container" on:click={setValues}>
            <summary>
                  <h3>Shop Settings:</h3>
            </summary>
        
        
            <TextInput title="Shop Name" bind:value={new_shop.name}></TextInput>
            <TextArea title="Shop Description" bind:value={new_shop.description}></TextArea>
            <button on:click={() => updateShop(new_shop)}>Apply</button>
      </details>
      
      <Dropdown>
         <h3 slot="title">Shop Settings:</h3>
         <div slot="body">
            <TextInput title="Shop Name" bind:value={new_shop.name}></TextInput>
            <TextArea title="Shop Description" bind:value={new_shop.description}></TextArea>
            <button on:click={() => updateShop(new_shop)}>Apply</button>
         </div>
      </Dropdown>

{/if}


<style>
   .container {
      grid-area: sets;
   } 

</style>