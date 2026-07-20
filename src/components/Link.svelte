<script lang="ts">
  import { usePageContext } from 'vike-lite-svelte'
  import type { Snippet } from 'svelte'

  let { href, children }: { href: string; children: Snippet } = $props()

  const pageContext = usePageContext()

  let isActive = $derived(
    href === '/'
      ? pageContext.urlPathname === href
      : pageContext.urlPathname.startsWith(href)
  )
</script>

<a {href} class="link" class:is-active={isActive}>
  {@render children()}
</a>
