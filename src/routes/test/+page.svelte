<script lang="ts">
	import HorizontalList from "$lib/HorizontalList.svelte";
	import ItemInfo from "$lib/ItemInfo.svelte";
	import MarketInfo from "$lib/MarketInfo.svelte";
	import MarketList from "$lib/MarketList.svelte";
	import ShopInfo from "$lib/ShopInfo.svelte";
	import UserInfo from "$lib/UserInfo.svelte";
	import Auth from "$lib/Auth.svelte";
	import { user, auth, getMarkets, getShops, getItems, current_market_id, current_shop_id, current_item_id, current_markets, current_shops, current_items, patron_list, getPatrons } from '$lib/db'

    var innerHeight;
    
    
    let active_market_id:number 
    let active_shop_id:number
    let active_item_id:number

    let markets:any[]
    let shops:Shop_type[]
    let items:any[]
    let patrons: any[]
    

    export async function reload() {
        
        shops = await getShops()
        items = await getItems()
    }
    
    current_market_id.subscribe(value => {
        active_market_id = value
    })

    current_shop_id.subscribe(value => {
        active_shop_id = value
    })
    
    current_item_id.subscribe(value => {
        active_item_id = value
    })


    current_markets.subscribe(value => {
        markets = value
    })

    current_shops.subscribe(value => {
        shops = value
    })

    current_items.subscribe(value => {
        items = value
    })

    patron_list.subscribe(value => {
        patrons = value
    })


    async function init() {
        current_markets.set(await getMarkets())
        current_shops.set(await getShops())
        current_items.set(await getItems())
        patron_list.set(await getPatrons())

        console.log(markets)
        
        let unique_markets_ids: number[] = []
        markets.forEach(market => {
            if (!unique_markets_ids.includes(market.id)) {
                unique_markets_ids.push(market.id)
            }
        });

        current_market_id.set(unique_markets_ids[0])    
    }

    $: current_market = markets.filter(v => v.id === active_market_id)
    
</script>


<svelte:window bind:innerHeight={innerHeight} />



{#if $user}
    <div class="grid" style="height: {innerHeight}px;">

        <UserInfo/>

        <button on:click={() => auth.signOut()} class="logout element--border--primary" >Sign out</button>
        <div class="settings element--border--primary">
            setting
        </div>

        
        
        
        
        {#await init() then}
        
            <MarketList markets={markets}/>

            <MarketInfo active_market_id={active_market_id} shops={shops} current_market={current_market}/>

            <ShopInfo active_shop_id={active_shop_id} items={items} current_market={current_market}/>

            <ItemInfo active_item_id={active_item_id} current_market={current_market}/>
        
        {/await}
    </div>
{:else}
    
    <Auth/>
 
{/if}


<style>


    .container {
        padding: 1rem;
        height: 100%;
        overscroll-behavior: contain;
    }

    .grid {
        padding: 1rem;
        overscroll-behavior: contain;
        height: 100%;
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

    .box {
        border: 2px solid;
        border-radius: .8rem;
    }


    .logout {
        grid-area: logout;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--red);
    }

    .settings {
        grid-area: settings;

        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--blue);
    }

    .marketList {
        

        

        
    }

    .marketInfo {
        grid-area: marketI;

        

    }

    .shopInfo {
        grid-area: shopI;
    }

    .itemInfo {
        grid-area: itemI;
    }

</style>
