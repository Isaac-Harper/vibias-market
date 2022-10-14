<script>
	import VerticalList from "./VerticalList.svelte";

</script>
<div class="container">
    <div class="title">
        <h3>Hats</h3>
    </div>
    <div class="body">
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
        grid-template-areas: "title     list"
                             "body      list";

        height: 100%;
    }

    .title {
        grid-area: title;
        padding: 0 .5rem;
    }

    .body {
        grid-area: body;
        padding: 0 .5rem;
    }

    .list {
        grid-area: list;
    }
</style>