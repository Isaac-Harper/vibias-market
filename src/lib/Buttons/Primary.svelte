<script lang="ts">
	export let func: Function;
	export let text: string;

	function click() {
		func();
	}
</script>

<button on:click={click}>
	{text}
</button>

<style>
	/* CSS */
	button {
		background-color: var(--primary-button-background);
		box-shadow: var(--primary-button-border) 4px 4px 0 0;
		border: 2px solid var(--primary-button-border);
		color: var(--primary-button-text);

		border-radius: 3rem;

		cursor: pointer;

		font-weight: var(--bold-wght);

		font-size: 18px;

		text-decoration: none;
		user-select: none;
		padding: var(--small-space);

		flex: 4;
	}

	button:hover {
		box-shadow: var(--primary-button-border) 3px 3px 0 0;
		transform: translate(1px, 1px);
	}

	button:active {
		box-shadow: var(--primary-button-border) 1px 1px 0 0;
		transform: translate(3px, 3px);
	}
</style>
