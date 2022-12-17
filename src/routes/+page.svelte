<script lang="ts">
	import ItemInfo from '$lib/ITEMS/ItemInfo.svelte';
	import MarketInfo from '$lib/MARKETS/MarketInfo.svelte';
	import MarketList from '$lib/MARKETS/MarketList.svelte';
	import ShopInfo from '$lib/SHOPS/ShopInfo.svelte';
	import UserInfo from '$lib/UserInfo.svelte';
	import Auth from '$lib/Auth.svelte';
	import { user, init } from '$lib/db';
	import { goto } from '$app/navigation';
	import Primary from '$lib/Buttons/Primary.svelte';

	let active = true;

	function toggleActive() {
		active = !active;
	}
</script>

{#if $user && active}
	<Primary text="Homepage" func={toggleActive} />
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

	<div class="center">
		<p>Virtual markets that make it easy to run shopping as a GM in your TTRPG if choice.</p>
		<img alt="fishies" class="img" src="/images/image11.png" />
	</div>

	<div class="selector">
		<a href="/about" class="option">About</a>
		<a href="/faq" class="option">FAQ</a>
		<a href="/contact" class="option">Contact</a>
	</div>

	<div class="grow" />
	<p class="align-center">Created by <a href="https://www.IsaacHarper.dev">Isaac Harper</a></p>
{/if}

<style>
	.box {
		display: flex;
		justify-content: center;
	}

	.align-center {
		align-self: center;
	}

	.img {
		width: 100%;
		aspect-ratio: 1.25;
	}

	.center {
		background-color: var(--twilight-blue);
		padding: var(--med-space);
		border-radius: var(--med-space);
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
		gap: var(--med-space);

		overflow: hidden;
	}

	.landing {
		height: 100vh;
		height: 100dvh;
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
