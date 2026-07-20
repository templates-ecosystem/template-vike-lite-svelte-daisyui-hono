<script lang="ts">
  import { usePageContext } from 'vike-lite-svelte'
  let pageContext = usePageContext()
</script>

{#if pageContext.is404}
  <h1>404 Page Not Found</h1>
  <p>This page could not be found.</p>
{:else}
  <h1>500 Internal Server Error</h1>
  <p>Something went wrong.</p>
{/if}
