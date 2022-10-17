<script>
	import VerticalList from "./VerticalList.svelte";

</script>
<div class="container element--border--primary">
    <div class="title">
        <h3>Hats</h3>
    </div>
    <div class="body">
        <h3>Hats</h3>
        <p>Any hat you can think of we will have. Pick one hat, 10 hats, any hat you want.</p>
    </div>
    <div class="list">
        <VerticalList/>
    </div>
</div>


<style>
    .container {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr 8fr;
        grid-template-areas: "body     list"
                             "body      list";

        height: 100%;
        
        grid-area: shopI;
    }

    .title {
        grid-area: title;
    }

    .body {
        grid-area: body;
        padding: 1rem;
    }

    .list {
        grid-area: list;
    }
</style>