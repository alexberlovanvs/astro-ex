<script>
  export let title = 'Counter';
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
  {title}: {count}
</button>

<style>
  button {
    background: #eee;
    border: 1px solid red;
    border-radius: 3px;
    padding: 0.5em 1em;
  }
</style>
