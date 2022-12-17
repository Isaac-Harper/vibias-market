<script lang="ts">
	export let func;
	export let text;
</script>

<button on:click={func}>
	{text}
</button>

<style>
	/* CSS */
	button {
		background-color: var(--secondary-button-background);
		box-shadow: var(--secondary-button-border) 4px 4px 0 0;
		border: 2px solid var(--secondary-button-border);
		color: var(--secondary-button-text);

		border-radius: 3rem;

		cursor: pointer;

		font-weight: var(--bold-wght);

		font-size: 18px;

		text-decoration: none;
		user-select: none;
		padding: 0 var(--med-space);
	}

	button:hover {
		box-shadow: var(--secondary-button-border) 3px 3px 0 0;
		transform: translate(1px, 1px);
	}

	button:active {
		box-shadow: var(--secondary-button-border) 1px 1px 0 0;
		transform: translate(3px, 3px);
	}
</style>
