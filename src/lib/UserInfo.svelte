<script>
    import { user } from '$lib/db'
</script>


<div class="container element--border--primary">
    <p>You are logged in as:</p>
    <p>{$user.email}</p>
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
</style>



