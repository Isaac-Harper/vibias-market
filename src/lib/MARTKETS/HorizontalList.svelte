<script lang="ts">
    import { user, current_market } from "$lib/db"

    function toggle_market(market) {
        if ( market == $current_market) {
            resetMarket()
        } else {
            creatingNew = false
            joiningNew = false
            current_market.set(market)
            resetShop()
        }
    }
</script>


<div class="container" >
    {#each $market_list as market}
        <div on:click={() => toggle_market(market)} class="item element--border--primary" class:selected="{market  === $current_market}">
            {market.name}
        </div>
    {/each}
</div>
    
    
<style>

    .container {
      display: flex;
      overflow-x: scroll;
      padding: 0 .5rem;
      margin: 0 -.5rem;
      gap: .5rem;
      height: 100%;
     
      scrollbar-width: none;
    }

    .item {
        height: 2rem;
        flex: 0 0 auto;
        min-width: 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }
    
</style> 