<script>
    import { user, auth } from '$lib/db'
</script>


<div class="holder"> 
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

        background: var(--oc-grape-8);
        color: var(--oc-gray-1);
    }

    .holder {
        display: flex;
        gap: var(--med-space);
        
    }

    .middle {
        flex-grow: 1;
    }
    
    .logout {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--med-space);
        background-color: var(--oc-red-8);
        color: var(--oc-gray-1);
    }
    
</style>



