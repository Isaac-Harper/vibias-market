<script lang="ts">
	import ItemInfo from "$lib/ITEMS/ItemInfo.svelte";
	import MarketInfo from "$lib/MARKETS/MarketInfo.svelte";
	import MarketList from "$lib/MARKETS/MarketList.svelte";
	import ShopInfo from "$lib/SHOPS/ShopInfo.svelte";
	import UserInfo from "$lib/UserInfo.svelte";
	import Auth from "$lib/Auth.svelte"
	import { user, init } from '$lib/db'
</script>

<div class="box">
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
	<div class="grid landing">
		<h1>Vibia's Market</h1>
		<p>Virtual markets that make it easy to run shopping as a GM in your TTRPG if choice.</p>
    	<p>Enter your email below to login/create an account and begin.</p>
    	<Auth/>
		<div class="grow"></div>
		<p>Created by <a href="https://www.IsaacHarper.dev">Isaac Harper</a></p>
	</div>
{/if}	
</div>

<style>

    .box {
        display: flex;
        justify-content: center;
		
	}
	
    .grid {
        padding: var(--med-space);
        display: flex;
        flex-direction: column;
        gap: var(--med-space);
        width: 100%;
        max-width: 50rem;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 5px;

        background-color: #ba673d;

        overflow: hidden;
    }
	
	.landing {
		align-items: center;
		height: 100vh;
		height: 100dvh;
	}
	
	.sticky {
		position: sticky;
		bottom: 0;
	}
	
	.grow {
		flex-grow: 1;
	}


</style>
