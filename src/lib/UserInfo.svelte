<script>
    import { user, auth } from '$lib/db'
</script>


<div class="holder"> 
    <div class="container element--border--primary">
        <p>You are logged in as:</p>
        <p>{$user.email}</p>
    </div>

    <button on:click={() => auth.signOut()} class="logout element--border--primary" >Sign out</button>

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
        grid-template-areas: "user logout";
        grid-template-columns: auto 1fr;
        gap: var(--med-space);
    }
    
    .logout {
        grid-area: logout;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--red);
    }
    
</style>



