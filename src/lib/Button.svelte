<script lang="ts">

    export let func
    export let text
    export let background_color = "#ffffff"
    let bcolor = background_color
    export let color = "#000000"

    function handleMouseOut() {
        bcolor = background_color
    }

    function handleMouseOver() {
        bcolor = color
    }

    function handleMouseDown() {
        bcolor = "#12ff12"
    }
</script>


<button 
    on:click={func} 
    style:background-color={bcolor}
    style:color={color}
    on:mouseenter={handleMouseOver} 
    on:mouseleave={handleMouseOut}
    on:mousedown={handleMouseDown}
    >
        {text}
    </button>


<style>
    /* CSS */
    button {
        border: 2px solid #422800;
        border-radius: 3rem;
        box-shadow: #422800 4px 4px 0 0;

        color: #994f4e;

        cursor: pointer;
        
        font-weight: var(--bold-wght);
        
        font-size: 18px;

        text-decoration: none;
        user-select: none;
    }

    button:hover {
        background-color: #fff;
    }

    button:active {
        box-shadow: #422800 2px 2px 0 0;
        transform: translate(2px, 2px);
    }
</style>