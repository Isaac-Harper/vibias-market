<script lang="ts">
	export let value;
	export let on = 'on';
	export let off = 'off';
</script>

{#if value}
	{on}
{:else}
	{off}
{/if}
