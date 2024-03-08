<script>
    /** @type {import('./$types').PageData} */
    import { get } from 'svelte/store';
    import { Todos } from '../../store';
	// export let data;
    let todos = get(Todos);
    console.log($Todos)
    console.log(todos)

</script>
<div class=" flex items-center flex-col justify-center ">
    hiii
    <div class="max-w-[1000px] w-full flex flex-col items-center justify-center text-black">
        hey
        <!-- <p>{data.userId}</p>
                <p>{data.title}</p>
                <p>{data.completed ? "Done" : "Pending"}</p> -->
        {#each $Todos as todo}
            <div class="flex flex-col w-full items-center gap-5">
                hello
                <!-- <p>{todo.userId}</p>
                <p>{todo.title}</p>
                <p>{todo.completed ? "Done" : "Pending"}</p> -->
            </div>
        {/each}
    </div>
</div>