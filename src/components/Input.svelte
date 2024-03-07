<script>
    export let value = "";
    export let id = "";
    export let type = "";
    const onInput = e => (value = e.target.value);
  </script>
  
  <input name={id} class="rounded-md py-1 px-2 border-gray-500 bg-opacity-70 bg-white text-black" {value} id={id} type={type} on:input={onInput} />
  