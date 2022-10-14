<script lang="ts">
    import { current_market_id, user } from '$lib/db'

    export let current_market: any[]
    export let patrons: any[]

    let active_market_id:number

    current_market_id.subscribe(value => {
        active_market_id = value
    })

    $: current_patron = patrons.filter(v => v.market_id === active_market_id)
</script>


{#if active_market_id != 0 && current_market[0].creator_id != $user.id}
    <div class="container">
        {#if current_patron.length != 0}
            <h3>{current_patron[0].name}</h3>
            <p>You have {current_patron[0].coins} coins</p>
        {:else}
            YOU ARE MISSING A CHARACTER
        {/if}
    </div>

{/if}

<style>
    .container {
        margin: 2rem;
        padding: 2rem;
        border: solid;
        border-radius: 2rem;
    }

    .flex {
        display: flex;
        gap: 2rem;
    }
</style>