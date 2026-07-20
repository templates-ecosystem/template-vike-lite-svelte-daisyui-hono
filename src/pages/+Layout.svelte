<script lang="ts">
  import Layout from '@/components/Layout.svelte'
  import type { Snippet } from 'svelte'

  let { children }: { children: Snippet } = $props()
</script>

<Layout>
  {@render children()}
</Layout>
