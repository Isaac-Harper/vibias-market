<script>
    import { user, auth, market_list, shop_list, item_list, patron_list, getMarkets, getShops, getItems, getPatrons, joinMarket } from '$lib/db'
    
    
    async function init() {
        console.log("a")
        market_list.set(await getMarkets())
        shop_list.set(await getShops())
        item_list.set(await getItems())
        patron_list.set(await getPatrons())
        console.log("b")
    }

    function settings() {
        joinMarket("8f15fb36-73c3-454a-abc4-a1234468b1ce")
    }
</script>


<div class="holder"> 
    <div class="container element--border--primary">
        <p>You are logged in as:</p>
        <p>{$user.email}</p>
    </div>

    <button on:click={() => auth.signOut()} class="logout element--border--primary" >Sign out</button>

    <button on:click={settings} class="settings element--border--primary">
    setting
    </button>
</div>



<style>
    .container {
        grid-area: user;
        padding: var(--med-space);
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        background: #C2BD46;
    }

    .holder {
        display: grid;
        grid-template-areas: "user logout"
                             "user settings";
        gap: var(--med-space);
    }
    
    .logout {
        grid-area: logout;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--red);
    }

    .settings {
        grid-area: settings;

        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--blue);
    }
    
</style>



