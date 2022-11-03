<script lang="ts">
      import {user, current_shop, updateShop} from "$lib/db"

</script>

<details>
    <summary>
        <h3>Shop Settings:</h3>
    </summary>
    settings here
</details>


{#if $current_shop.creator_id !== $user.id }

    <details>
        <summary>
            <h3>Shop Settings:</h3>
        </summary>
        settings here
    </details>

{/if}