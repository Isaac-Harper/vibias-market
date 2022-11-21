<script>
    import { user, auth } from '$lib/db'

    let path = "logo.png"

    function togglePath() {
        if (path === "logo.png") {
            path = "logo_back.png"
        } else {
            path = "logo.png"
        }
    }
</script>


<div class="holder"> 
    <img src={path} on:click={togglePath} class="logo" alt="vibia">
    <div class="container element--border--primary">
        <p>You are logged in as:</p>
        <p>{$user.email}</p>
    </div>

    <div class="middle">

    </div>

    <button on:click={() => auth.signOut()} class="logout element--border--primary" >Sign out</button>

</div>



<style>
    .container {
        padding: var(--med-space);
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        background: #ae823b;
        color: #efeeec;
    }

    .holder {
        display: flex;
        gap: var(--med-space);
        
    }

    .middle {
        flex-grow: 1;
    }
    
    .logo {
        max-height: 7rem;
    }

    .logout {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--med-space);
        background-color: #8c869b;
        color: #efeeec;
    }
    
</style>



