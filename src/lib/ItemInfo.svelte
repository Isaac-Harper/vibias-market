<div class="container">
    <div class="title square">
        <h3>Baseball hat</h3> 
    </div>
    <div class="description">
        A fairly standard baseball hat
    </div>
    <div class="buy">
        Buy <br> 
        20 Coins
    </div>
</div>

<style>
    .container {
        height: 100%;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-template-rows: 1fr 2fr;
        grid-template-areas: "title buy"
                             "description buy";
        overflow: hidden;

        border: 2px solid;
        border-radius: .8rem;
    }

    .title {
        grid-area: title;
        padding: 0 .5rem;
        
    }

    .description {
        grid-area: description;
        padding: 0 .5rem;
    }

    .buy {
        grid-area: buy;
        background-color: #C2BD46;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
</style>
