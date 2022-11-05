<script lang="ts">
   import {user, current_shop  } from "$lib/db"
   import TextInput from "$lib/TextInput.svelte"
   import TextArea from "$lib/TextArea.svelte"
   import Dropdown from "$lib/Dropdown.svelte"
   import DeleteButton from '$lib/DeleteButton.svelte';
	import ApplyButton from '$lib/ApplyButton.svelte';
   
   $: new_shop = $current_shop
</script>


{#if $current_shop.creator_id === $user.id }
   <div class="container"> 
      <Dropdown>
         <span slot="title">Shop Settings:</span>
         <div slot="body" class="body">
            <TextInput title="Shop Name" bind:value={new_shop.name}></TextInput>
            <TextArea title="Shop Description" bind:value={new_shop.description}></TextArea>
            <div class="flex">
               <ApplyButton type="shop" obj={new_shop}/>
               <DeleteButton type="shop" id={$current_shop.id}/>
            </div>
            
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
      gap: var(--med-space);
   }

   .flex {
      display: flex;
   }
</style>