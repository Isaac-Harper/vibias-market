<script lang="ts">
	import ItemInfo from '$lib/ITEMS/ItemInfo.svelte';
	import MarketInfo from '$lib/MARKETS/MarketInfo.svelte';
	import MarketList from '$lib/MARKETS/MarketList.svelte';
	import ShopInfo from '$lib/SHOPS/ShopInfo.svelte';
	import Auth from '$lib/Auth.svelte';
	import { user, auth, init } from '$lib/db';
	import Primary from '$lib/Buttons/Primary.svelte';
	import Secondary from '$lib/Buttons/Secondary.svelte';
	import Link from '$lib/Buttons/Link.svelte';

	let active = true;

	function toggleActive() {
		active = !active;
	}
</script>

{#if $user && active}
	<div class="flex">
		<Primary text="Homepage" func={toggleActive} />
		<Secondary text="Log Out" func={() => auth.signOut()} />
	</div>

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
		<p class="text">Simplify Shopping in TTRPGs with Vibia's Market - The Ultimate Tool for Organizing and Managing Your In-Game Stores!</p>
		<img alt="fishies" class="img" src="/images/image11.png" />
	</div>

	<div class="selector">
		<Link text="About" link="/about" />
		<Link text="FAQ" link="/faq" />
		<Link text="Contact" link="/contact" />
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
