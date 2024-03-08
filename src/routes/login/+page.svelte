<script>
  	import Button from "../../components/Button.svelte";
	import Input from "../../components/Input.svelte";
	let email = '';
	let password = '';
	/** @type {import('./$types').ActionData} */
</script>
<div class="w-screen h-screen flex items-center justify-center poppins ">
	<form method="POST" action="/login" class="flex-col text-white gap-5 rounded-2xl drop-shadow-2xl py-20 px-10 bg-purple-600 flex justify-center">
		<h1 class="text-4xl font-extrabold ">Welcome, Login to continue</h1>
		<div class="flex flex-col mx-10">
			<label for="email" class="font-semibold poppins">
				Email
			</label>
			<Input bind:value={email} type="email" id="email"/>
		</div>
		<div class="flex flex-col mx-10">
			<label for="email" class="font-semibold poppins">
				Password
			</label>
			<Input bind:value={password} type="password" id="password"/>
		</div>
		<Button className="mx-10 mt-10 text-black poppins font-bold text-xl bg-white hover:bg-opacity-75 px-0 py-1.5" content="Login" />
	</form>
</div>