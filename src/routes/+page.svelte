<script lang="ts">

	import ItemInfo from "$lib/ItemInfo.svelte";
	import MarketInfo from "$lib/MarketInfo.svelte";
	import MarketList from "$lib/MarketList.svelte";
	import ShopInfo from "$lib/ShopInfo.svelte";
	import UserInfo from "$lib/UserInfo.svelte";
	import Auth from "$lib/Auth.svelte"
	import { user, getMarkets, getShops, getItems, patron_list, getPatrons, market_list, shop_list, item_list } from '$lib/db'
	import Inventory from "$lib/Inventory.svelte";
 

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
            <Inventory/>
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
        display: grid;
        gap: .5rem;
        grid-template-columns: 5fr 2fr;

        grid-template-areas: 
            "user       logout"
            "user       settings"
            "marketL    marketL"
            "marketI    marketI"
            "shopI      shopI"
            "itemI      itemI";
    }

</style>
