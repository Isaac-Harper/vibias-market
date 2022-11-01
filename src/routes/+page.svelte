<script lang="ts">

	import ItemInfo from "$lib/ITEMS/ItemInfo.svelte";
	import MarketInfo from "$lib/MARTKETS/MarketInfo.svelte";
	import MarketList from "$lib/MARTKETS/MarketList.svelte";
	import ShopInfo from "$lib/SHOPS/ShopInfo.svelte";
	import UserInfo from "$lib/UserInfo.svelte";
	import Auth from "$lib/Auth.svelte"
	import { user, getMarkets, getShops, getItems, patron_list, getPatrons, market_list, shop_list, item_list } from '$lib/db'
	import Inventory from "$lib/MARTKETS/Inventory.svelte";
 

    export async function init() {
        market_list.set(await getMarkets())
        shop_list.set(await getShops())
        item_list.set(await getItems())
        patron_list.set(await getPatrons())
 
    }
</script>




{#if $user}
    <div class="grid">
        <UserInfo/>
        {#await init() then}
            <MarketList/>
            <MarketInfo/>
            <ShopInfo/>
            <ItemInfo/>
            
        {/await}
    </div>
{:else}
    <Auth/>
{/if}


<style>
    .grid {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

</style>
