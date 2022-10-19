<script lang="ts">
	import HorizontalList from "$lib/HorizontalList.svelte";
	import ItemInfo from "$lib/ItemInfo.svelte";
	import MarketInfo from "$lib/MarketInfo.svelte";
	import MarketList from "$lib/MarketList.svelte";
	import ShopInfo from "$lib/ShopInfo.svelte";
	import UserInfo from "$lib/UserInfo.svelte";
	import Auth from "$lib/Auth.svelte";
	import { user, auth, getMarkets, getShops, getItems, current_market_id, current_shop_id, current_item_id, current_market, current_shop, current_item, patron_list, getPatrons, market_list, shop_list, item_list } from '$lib/db'
    
    $: innerHeight = 0
    $: innerWidth = 0

    let markets:any[]
    let shops:Shop_type[]
    let items:any[]
    let patrons: any[]
    
    let active_market
    let active_shop
    let active_item
    

    export async function reload() {
        
        shops = await getShops()
        items = await getItems()
    }


    market_list.subscribe(value => {
        markets = value
    })

    shop_list.subscribe(value => {
        shops = value
    })

    item_list.subscribe(value => {
        items = value
    })

    patron_list.subscribe(value => {
        patrons = value
    })

    current_market.subscribe(v => {
        active_market = v
    }) 
    
    current_shop.subscribe(v => {
        active_shop = v
    }) 
    
    current_item.subscribe(v => {
        active_item = v
    }) 

    async function init() {
        market_list.set(await getMarkets())
        shop_list.set(await getShops())
        item_list.set(await getItems())
        patron_list.set(await getPatrons())
 
    }
</script>


<svelte:window bind:innerHeight bind:innerWidth/>



{#if $user}
    <div class="grid" style="height: {innerHeight}px; width: {innerWidth}px;">
        <UserInfo/>
        {#await init() then}
            <MarketList {markets}/>
            <MarketInfo {shops} {active_market}/>
            <ShopInfo {items} {active_shop}/>
            <ItemInfo {active_item}/>
        {/await}
    </div>
{:else}
    <Auth/>
{/if}


<style>
    .grid {
        padding: 1rem;
        overscroll-behavior: contain;
        height: 100%;
        width: 100;
        display: grid;
        gap: .5rem;
        grid-template-rows: .5fr .5fr minmax(0, 2fr) minmax(0,6fr) minmax(0, 4fr) minmax(0, 2fr);
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
