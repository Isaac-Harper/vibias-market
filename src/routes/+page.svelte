<script lang="ts">
	import ItemInfo from "$lib/ITEMS/ItemInfo.svelte";
	import MarketInfo from "$lib/MARKETS/MarketInfo.svelte";
	import MarketList from "$lib/MARKETS/MarketList.svelte";
	import ShopInfo from "$lib/SHOPS/ShopInfo.svelte";
	import UserInfo from "$lib/UserInfo.svelte";
	import Auth from "$lib/Auth.svelte"
	import { user, init } from '$lib/db'
</script>

{#if $user}
    <div class="grid">
        <UserInfo/>
        {#await init() then}
            <div class="container element--border--primary">
                <MarketList/>
                <MarketInfo/>
                <ShopInfo/>
                <ItemInfo/>
            </div>
        {/await}
    </div>
{:else}
    <Auth/>
{/if}


<style>
    .grid {
        padding: var(--med-space);
        display: flex;
        flex-direction: column;
        gap: var(--med-space);
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 5px;

        background-color: var(--background-dark);

        overflow: hidden;
    }

</style>
