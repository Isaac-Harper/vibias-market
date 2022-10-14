<script context="module" lang="ts">
	import ItemHolder from '$lib/ItemHolder.svelte';
	import ShopHolder from '$lib/ShopHolder.svelte';
	import type {Shop_type} from '$lib/types/Shop_type';

    import Auth from "$lib/Auth.svelte"

    import { user, getMarkets, getShops, getItems, current_market_id, current_shop_id, current_markets, current_shops, current_items, patron_list, getPatrons } from '$lib/db'

    import User from "$lib/User.svelte"
	import MarketHolder from '$lib/MarketHolder.svelte';
	import Character from '$lib/Character.svelte';


    
</script>


<script lang="ts">
    let active_market_id:number
    let active_shop_id:number

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



{#if $user} 
    <User/>
    {#await init() then}
        

        <MarketHolder markets={markets}/>
        <Character patrons={patrons} current_market={current_market}/>
        <ShopHolder active_market_id={active_market_id} shops={shops} current_market={current_market}/>
        <ItemHolder active_shop_id={active_shop_id} items={items} current_market={current_market}/>
        
    {/await}
{:else}
    <Auth/>
{/if}

