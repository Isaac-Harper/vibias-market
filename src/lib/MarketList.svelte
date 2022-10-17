<script>
	import HorizontalList from "./HorizontalList.svelte";

</script>




<div class="holder element--border--primary">
    <h3>Markets</h3>
    <HorizontalList/>
</div>

<style>
    .holder {

        grid-area: marketL;
        height: 100%;
        display: flex;
        flex-direction: column;

        grid-area: marketL;
        
    }

    h3 {
        padding: 0 .5rem;
    }
</style>