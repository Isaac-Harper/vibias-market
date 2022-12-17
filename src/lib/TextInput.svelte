<script lang="ts">
	export let value = '';
	export let title = 'No Title';
	export let maxlength = 36;
</script>

<div class="container">
	<h4>{title}</h4>
	<p>{value.length}/{maxlength}</p>
	<input class="element--border--primary" type="text" bind:value {maxlength} />
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr auto;
	}
	input {
		width: 100%;
		padding: var(--med-space);
		grid-area: 2 / 1 / 3 / 3;
	}
</style>
