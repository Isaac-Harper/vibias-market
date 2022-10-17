<div class="container">
    <div class="item element--border--primary">
        Hats
    </div>
    <div class="item element--border--primary selected">
        Kyria part
    </div>
    <div class="item element--border--primary">
        Pet store
    </div>
    <div class="item element--border--primary">
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
        margin: .2rem 0;

        background-color: var(--blue);
    }
    
    .selected {
        background-color: var(--red);
    }
</style>