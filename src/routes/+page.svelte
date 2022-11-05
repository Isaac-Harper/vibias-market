<script lang="ts">
	import ItemInfo from "$lib/ITEMS/ItemInfo.svelte";
	import MarketInfo from "$lib/MARTKETS/MarketInfo.svelte";
	import MarketList from "$lib/MARTKETS/MarketList.svelte";
	import ShopInfo from "$lib/SHOPS/ShopInfo.svelte";
	import UserInfo from "$lib/UserInfo.svelte";
	import Auth from "$lib/Auth.svelte"
	import { user, init } from '$lib/db'
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
        padding: var(--med-space);
        display: flex;
        flex-direction: column;
        gap: var(--med-space);
    }

</style>
