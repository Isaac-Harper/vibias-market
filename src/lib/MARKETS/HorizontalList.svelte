<script lang="ts">
    import { user, current_market, market_list, shop_list, item_list, patron_list, resetShop, resetMarket, resetPatron, current_patron, inventory, resetItem, current_item, current_shop, state} from "$lib/db"

    export let list = "none"
	export let content = []
	

	
    function toggle_market(market) {
        if ( market == $current_market) {
			$state.market_open = false
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
			$state.market_open = true
        }
    }

    function toggle_shop(shop) {
        if ( shop == $current_shop) {
            resetShop()
        } else {
            current_shop.set(shop)
            resetItem()
        }
    }

    function toggle_item(item) {
        if ( item == $current_item) {
            resetItem()
        } else {
            current_item.set(item)
        }
    }
</script>


<div class="container" >
    
    
    {#if list === "market"}
        {#each $market_list as market}
            <div on:click={() => toggle_market(market)} class="item element--border--primary" class:selected="{market.id  === $current_market.id}" class:unselected="{market.id  !== $current_market.id}">
                {market.name}
            </div>
        {/each}
    {:else if list === "shop"}
        {#each content as shop}
            <div on:click={() => toggle_shop(shop)} class="item element--border--primary" class:selected="{shop.id  === $current_shop.id}" class:unselected="{shop.id  !== $current_shop.id}">
                {shop.name}
            </div>
        {/each}
    {:else if list === "item"}
        {#each content as item}
            <div on:click={() => toggle_item(item)} class="item element--border--primary" class:selected="{item.id  === $current_item.id}" class:unselected="{item.id  !== $current_item.id}">
                {item.name}
            </div>
        {/each}
    {/if}
</div>
    
    
<style>

    .container {
      display: flex;
      overflow-x: scroll;
      padding: 0 1rem;
      margin: 0 -1rem;
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
        padding: var(--med-space);
    }
    
</style>