<script lang="ts">
	import VerticalList from "$lib/VerticalList.svelte"
    import {current_market} from "$lib/db"
    
    export let shops: any[]

    

</script>


{#if Object.keys($current_market).length !== 0 }
    <div class="container element--border--primary"> 
        <div class="title">
            <h3>{$current_market.title}</h3>
        </div>
        <div class="body">
            <p>{$current_market.description}</p>
        </div>
        <div class="list">
            <VerticalList elements={shops}/>
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
</style>