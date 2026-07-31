<script lang="ts">
  import { apiCall } from './utils/fetch'

  let username = $state()
  let userId = $state()
  let updatedUsername = $state()
  let updatedUserId = $state()
</script>

<button class="btn btn-md" onclick={async () => {
  const { id, name } = await apiCall('/api/userRetrieve')
  username = name
  userId = id
}}>
  Click to call API /userRetrieve and show result
</button>

{#if userId}
  <ul class="list">
    <li class="list-row">User ID: {userId}</li>
    <li class="list-row">User name: {username}</li>
  </ul>
{/if}

<div class="divider divider-neutral"></div>

<button class="btn btn-md" onclick={async () => {
  const { id, name } = await apiCall('/api/userUpdate', { id: 'updated-1', name: 'updated-newUsername' })
  updatedUsername = name
  updatedUserId = id
}}>
  Click to call API /userUpdate and show result
</button>

{#if updatedUserId}
  <ul class="list">
    <li class="list-row">User ID: {updatedUserId}</li>
    <li class="list-row">User name: {updatedUsername}</li>
  </ul>
{/if}
