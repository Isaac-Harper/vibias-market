<script lang="ts">
      import {user, current_shop, updateShop} from "$lib/db"
      import TextInput from "$lib/TextInput.svelte"
      import TextArea from "$lib/TextArea.svelte"
      
      

</script>


{#if $current_shop.creator_id !== $user.id }
      <details>
            <summary>
                  <h3>Shop Settings:</h3>
            </summary>
        
        
            <TextInput title="Shop Name" bind:value={$current_shop.name}></TextInput>
            <TextArea title="Shop Description" bind:value={$current_shop.description}></TextArea>
            <button on:click={() => updateShop($current_shop)}>Apply</button>
      </details>

{/if}