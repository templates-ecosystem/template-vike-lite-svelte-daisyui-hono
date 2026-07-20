<script lang="ts">
  import '@/styles/styles.css'
  import '@/styles/tailwind.css'
  import Link from './Link.svelte'
  import type { Snippet } from 'svelte'

  let { children }: { children: Snippet } = $props()
</script>

<div style="display: flex; max-width: 900px; margin: auto;">
  <div id="sidebar" style="
      padding: 20px;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      line-height: 1.8em;
      border-right: 2px solid #eee;
    ">
    <Link href="/">Welcome</Link>
  </div>

  <div id="page-container">
    <div id="page-content" style="
        padding: 20px;
        padding-bottom: 50px;
        min-height: 100vh;
      ">
      {@render children()}
    </div>
  </div>
</div>
