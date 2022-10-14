<script lang="ts">
    import Market from "$lib/Market.svelte";
	import { user, newMarket } from "$lib/db";

    export let markets: any[]

    let name: string
    let description: string

    let creating_new = false

    function toggleCreate() {
        if (creating_new) {
            creating_new = false
        } else {
            creating_new = true
        }
    }

    function createNew() {
        newMarket(name, description, $user.id)
        name = ''
        description = ''
        creating_new = false
    }
</script>




    <div class="container">
        <h3>Markets</h3>
        {#if creating_new}
            <button on:click={toggleCreate}>View markets</button>
            <div class="flex">
                <input type="text" name="name" id="name" bind:value={name} placeholder="name">
                <input type="text" name="description" id="description" bind:value={description} placeholder="description">
                <button on:click={() => createNew()}>Create</button>
            </div>
        {:else}
            <button on:click={toggleCreate}>Create new market</button>
            <div class="flex">
                {#each markets as item}
                    {#if item.creator_id === $user.id}
                        <Market name={item.name} description={item.description} id={item.id} owner></Market>
                    {:else}
                        <Market name={item.name} description={item.description} id={item.id}></Market>
                    {/if}
                {/each}
            </div>
        {/if}  
    </div>



<style>
    .container {
        margin: 2rem;
        padding: 2rem;
        border: solid;
        border-radius: 2rem;
    }

    .flex {
        display: flex;
        gap: 2rem;
    }
</style>