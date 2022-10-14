<script>
	import HorizontalList from "./HorizontalList.svelte";

</script>




<div class="holder">
    <h3>Markets</h3>
    <HorizontalList/>
</div>

<style>
    .holder {

        grid-area: marketL;
        height: 100%;
        display: flex;
        flex-direction: column;

        border: 2px solid;
        border-radius: .8rem;

        
    }

    h3 {
        padding: 0 .5rem;
    }
</style>