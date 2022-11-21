<script lang="ts">
   import {current_shop, state, openShop  } from "$lib/db"
   import TextInput from "$lib/TextInput.svelte"
   import TextArea from "$lib/TextArea.svelte"
   import DeleteButton from '$lib/DeleteButton.svelte';
	import ApplyButton from '$lib/ApplyButton.svelte';
   
   $: new_shop = $current_shop

   function closeSettings() {
      openShop()
   }
</script>


{#if $state.edit_shop_open}
   <div class="container"> 
      <h3 >Shop Settings:</h3>
      <div  class="body">
         <TextInput title="Shop Name" bind:value={new_shop.name}></TextInput>
         <TextArea title="Shop Description" bind:value={new_shop.description}></TextArea>
         <div class="flex">
            <ApplyButton type="shop" obj={new_shop}/>
            <DeleteButton type="shop" id={$current_shop.id}/>
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
      gap: var(--med-space);
   }

   .flex {
      display: flex;
   }
</style>