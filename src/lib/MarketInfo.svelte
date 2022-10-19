<script lang="ts">
	import VerticalList from "$lib/VerticalList.svelte"
    import {shop_list, current_market} from "$lib/db"
    
    export let shops: any[]

    let current_shops = $shop_list.filter(v => v.id === $current_market.id)
    
    

</script>


{#if Object.keys($current_market).length !== 0 }
    <div class="container element--border--primary"> 
        <div class="title">
            <h3>{$current_market.name}</h3>
        </div>
        <div class="body">
            <p>{$current_market.description}</p>
        </div>
        
        
        <div class="list">
            {#each current_shops as element}
                <div class="item element--border--primary">
                    {element.name}
                </div>
            
            {/each}
        </div>
    </div>
{/if}


<style>
    .container {
        height: 100%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr 8fr;
        grid-template-areas: "title     list"
                             "body      list";
                             
        grid-area: marketI;   

    }

    .title {
        grid-area: title;
        padding: 0 .5rem;
        
    }


    .body {
        grid-area: body;
        padding: 0 .5rem;
    }

    .list {
        grid-area: list;
    }
    
    .list {
        grid-area: list;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;

        padding: .5rem;
        height: 100%;
    }
    .item {
        flex: 0 0 5rem;
        display: flex;
        
        justify-content: center;
        align-items: center;
        margin: .2rem 0;

    }
    
</style>