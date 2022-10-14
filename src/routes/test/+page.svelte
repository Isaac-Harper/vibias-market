<script>
	import HorizontalList from "$lib/HorizontalList.svelte";
	import ItemInfo from "$lib/ItemInfo.svelte";
	import MarketInfo from "$lib/MarketInfo.svelte";
	import MarketList from "$lib/MarketList.svelte";
	import ShopInfo from "$lib/ShopInfo.svelte";
	import UserInfo from "$lib/UserInfo.svelte";

    var innerHeight;

</script>


<svelte:window bind:innerHeight={innerHeight} />

<div class="container" style="height: {innerHeight}px;">
    <div class="grid">

        <UserInfo/>

        <div class="logout box">
            logout
        </div>
        <div class="settings box">
            setting
        </div>

        <MarketList/>

        <div class="marketInfo box">
            <MarketInfo/>

        </div>
        <div class="shopInfo box">
            <ShopInfo/>
        </div>
        <div class="itemInfo">
            <ItemInfo/>
        </div>  
    </div>
</div>

<style>


    .container {
        padding: 1rem;
        height: 100%;
        overscroll-behavior: contain;
    }

    .grid {
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

        background-color: #B77647;
    }

    .settings {
        grid-area: settings;

        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #BFC8D3;
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
