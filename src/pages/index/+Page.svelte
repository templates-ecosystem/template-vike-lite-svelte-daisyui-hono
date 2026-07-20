<script lang="ts">
  let isChecked = $state(true)
</script>

<h1>App: Vike Lite + Svelte</h1>

<input
  type="checkbox"
  class="checkbox"
  bind:checked={isChecked}
/>

<br />

The checkbox is: {isChecked ? 'checked' : 'unchecked'}
