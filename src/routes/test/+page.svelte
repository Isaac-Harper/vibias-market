<script>
	import HorizontalList from "$lib/HorizontalList.svelte";
	import ItemInfo from "$lib/ItemInfo.svelte";
	import MarketInfo from "$lib/MarketInfo.svelte";
	import MarketList from "$lib/MarketList.svelte";
	import ShopInfo from "$lib/ShopInfo.svelte";
	import UserInfo from "$lib/UserInfo.svelte";
	
	import { user, auth } from '$lib/db'

    var innerHeight;

</script>


<svelte:window bind:innerHeight={innerHeight} />



{#if $user}
    <div class="grid" style="height: {innerHeight}px;">

        <UserInfo/>

        <button on:click={() => auth.signOut()} class="logout element--border--primary" >Sign out</button>
        <div class="settings element--border--primary">
            setting
        </div>

        <MarketList/>

        <MarketInfo/>

        <ShopInfo/>

        <ItemInfo/>
    </div>
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
