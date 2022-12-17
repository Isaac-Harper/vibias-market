<script lang="ts">
	import UserInfo from '$lib/UserInfo.svelte';
	import 'remixicon/fonts/remixicon.css';
</script>

<svelte:head>
	<link rel="stylesheet" href="/reset.css" />
	<link rel="stylesheet" href="/open-color.css" />
</svelte:head>

<div class="outer-container">
	<div class="inner-container">
		<UserInfo />
		<slot />
	</div>
</div>

<style>
	.outer-container {
		display: flex;
		justify-content: center;
	}

	.inner-container {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 50rem;
		padding: var(--med-space);
		gap: var(--med-space);
	}
</style>
