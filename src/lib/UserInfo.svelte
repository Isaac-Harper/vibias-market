<script>
	import { user, auth } from '$lib/db';
	import Secondary from './Buttons/Secondary.svelte';

	let path = 'logo.png';

	function togglePath() {
		if (path === 'logo.png') {
			path = 'images/logo_flip_1.png';
			setTimeout(function () {
				path = 'images/logo_flip_2.png';
			}, 100);
			setTimeout(function () {
				path = 'logo_back.png';
			}, 200);
		} else {
			path = 'images/logo_flip_2.png';
			setTimeout(function () {
				path = 'images/logo_flip_1.png';
			}, 100);
			setTimeout(function () {
				path = 'logo.png';
			}, 200);
		}
	}
</script>

<div class="holder">
	<img src={path} on:click={togglePath} class="logo" alt="vibia" />

	<div class="middle">
		<a href="/">
			<h1>Vibia's Market</h1>
		</a>
		{#if $user}
			<p>{$user.email}</p>
		{:else}
			<p>&nbsp;</p>
		{/if}
	</div>
</div>

<style>
	h1 {
		font-size: 1.5rem;
		text-shadow: -2px 2px var(--hamlet-red);
	}
	p {
		font-size: 0.75rem;
	}

	.holder {
		display: flex;
		gap: var(--med-space);
	}

	.middle {
		flex-grow: 1;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}

	.logo {
		max-height: 7rem;
	}
</style>
