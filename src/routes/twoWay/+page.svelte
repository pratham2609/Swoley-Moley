<script>
	import {writable} from 'svelte/store';
  import Input from '../../components/Input.svelte';
	let letValue = 'test let';
	const storeValue = writable('test store');
	const reset= ()=>{
		letValue = 'test let';
		$storeValue = 'test store';
	}
</script>

<Input bind:value={letValue}/>
<Input bind:value={$storeValue}/>
<button on:click={reset}>reset</button>