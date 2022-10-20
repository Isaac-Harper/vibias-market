<script>
    import { user, auth, market_list, shop_list, item_list, patron_list, getMarkets, grtShops, getItems, getPatrons } from '$lib/db'
    
    
    async function init() {
        market_list.set(await getMarkets())
        shop_list.set(await getShops())
        item_list.set(await getItems())
        patron_list.set(await getPatrons())
 
    }
</script>


<div class="container element--border--primary">
    <p>You are logged in as:</p>
    <p>{$user.email}</p>
</div>

<button on:click={() => auth.signOut()} class="logout element--border--primary" >Sign out</button>

<div class="settings element--border--primary">
  setting
</div>

<style>
    .container {
        grid-area: user;
        padding: 0 .5rem;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        background: #C2BD46;
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



