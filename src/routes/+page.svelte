<script lang="ts">
	import ItemInfo from '$lib/ITEMS/ItemInfo.svelte';
	import MarketInfo from '$lib/MARKETS/MarketInfo.svelte';
	import MarketList from '$lib/MARKETS/MarketList.svelte';
	import ShopInfo from '$lib/SHOPS/ShopInfo.svelte';
	import Auth from '$lib/Auth.svelte';
	import { user, auth, init } from '$lib/db';
	import Primary from '$lib/Buttons/Primary.svelte';
	import Secondary from '$lib/Buttons/Secondary.svelte'
	import Link from '$lib/Buttons/Link.svelte'

	let active = true;

	function toggleActive() {
		active = !active;
	}
</script>

{#if $user && active}
	<Primary text="Homepage" func={toggleActive} />
	<Secondary text="Sign Out" func={() => auth.signOut()} />
	{#await init() then}
		<div class="container element--border--primary">
			<MarketList />
			<MarketInfo />
			<ShopInfo />
			<ItemInfo />
		</div>
	{/await}
{:else}
	{#if $user}
		<Primary text="Open App" func={toggleActive} />
	{:else}
		<Auth />
	{/if}

	<div class="card">
		<p>Welcome to Vibia's Market, the ultimate tool for making shopping in DnD and other role playing games easier than ever before! With Vibia's Market, you can create your own virtual market filled with all sorts of shops and items, inviting your players to shop to their heart's content. No more rummaging through endless pages of lists or trying to remember what you have in your inventory - Vibia's Market keeps it all organized and at your fingertips. So why wait? Start building your market today and take your role playing experience to the next level!</p>
		<img alt="fishies" class="img" src="/images/image11.png" />
	</div>

	<div class="selector">
		<Link text="About" link="/about"/>
		<Link text="FAQ" link="/faq"/>
		<Link text="Contact" link="/contact"/>
	</div>

	<div class="grow" />
	<p class="align-center">Created by <a href="https://www.IsaacHarper.dev">Isaac Harper</a></p>
{/if}

<style>
	.align-center {
		align-self: center;
	}

	.img {
		width: 100%;
		aspect-ratio: 1.25;
	}


	.container {
		display: flex;
		flex-direction: column;
		gap: var(--med-space);

		overflow: hidden;
	}

	.grow {
		flex-grow: 1;
	}

	.selector {
		display: flex;
		padding: var(--med-space);
		gap: var(--med-space);
	}

	.option {
		padding: var(--med-space);
		width: 100%;
		background-color: var(--stone-tim-sage);
		border-radius: var(--med-space);
		border: 2px solid var(--moss-green);
		box-shadow: var(--moss-green) 4px 4px;

		text-decoration: none;
	}

	.option:hover {
		box-shadow: var(--moss-green) 3px 3px;
		transform: translate(1px, 1px);
	}

	.option:active {
		box-shadow: var(--moss-green) 2px 2px;
		transform: translate(2px, 2px);
	}
</style>
