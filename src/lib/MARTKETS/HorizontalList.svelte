<script lang="ts">
    import { user, current_market, market_list, patron_list, resetShop, resetMarket, resetPatron, current_patron, inventory} from "$lib/db"



    function toggle_market(market) {
        if ( market == $current_market) {
            resetMarket()
            resetPatron()
        } else {
            current_market.set(market)
            let filtered = $patron_list.filter(v => (v.player_id === $user.id) && (v.market_id === $current_market.id) ) 
            if (filtered.length !== 0) {
                current_patron.set(filtered[0])
                inventory.set($current_patron.inventory_ids)
            } else {
                resetPatron()
            }
            resetShop()
        }
    }
</script>


<div class="container" >
    {#each $market_list as market}
        <div on:click={() => toggle_market(market)} class="item element--border--primary" class:selected="{market.id  === $current_market.id}">
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