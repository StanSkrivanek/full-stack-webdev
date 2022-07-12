<script>
  import TodoItem from "$lib/TodoItem.svelte";
  const title = "Svelte Todo";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>


<h1>{title}</h1>

<form action="" method="">
  <input type="text" name="text" aria-label="Add a Todo" placeholder="+ type to add a todo" id="">

</form>

<TodoItem />

