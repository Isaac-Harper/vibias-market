<script>
	import VerticalList from "./VerticalList.svelte";

</script>
<div class="container">
    <div class="title">
        <h3>Ader</h3>
    </div>
    <div class="body">
        <p>Welcome to Ader one of the largest citys in the world. Here you can find any item you need if you know where to look.</p>
    </div>
    <div class="list">
        <VerticalList/>
    </div>
</div>


<style>
    .container {
        height: 100%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr 8fr;
        grid-template-areas: "title     list"
                             "body      list";

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