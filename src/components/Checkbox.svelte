<script lang="ts">
  let isChecked = $state(true)
</script>

Click to change value: <input
  type="checkbox"
  class="checkbox"
  bind:checked={isChecked}
/>

<br />

The checkbox is: {isChecked ? 'checked' : 'unchecked'}
