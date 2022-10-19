<script>
    import { user, auth } from '$lib/db'
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



