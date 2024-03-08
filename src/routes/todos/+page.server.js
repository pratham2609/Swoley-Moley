import axios from "axios";
import { Todos } from "../../store";
import { get } from "svelte/store";
/** @type {import('./$types').PageServerLoad} */

export async function load() {
    let data = axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
            // console.log(response.data);
            Todos.update(() => {
                let todo = get(Todos);
                // console.log(todo)
                return [response.data]
            });
        })
        .catch(error => {
            console.log(error);
        });
        // console.log(data)
    return data;
}