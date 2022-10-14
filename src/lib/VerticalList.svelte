<div class="container">
    <div class="item">
        Hats
    </div>
    <div class="item">
        Kyria part
    </div>
    <div class="item">
        Pet store
    </div>
    <div class="item">
        general
    </div>

</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;

        padding: .5rem;
        height: 100%;
    }
    .item {
        flex: 0 0 5rem;
        display: flex;
        
        justify-content: center;
        align-items: center;
        border: solid black 2px;
        margin: .2rem 0;

    }
</style>