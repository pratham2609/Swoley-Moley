import { get, writable } from "svelte/store";

export const openModal = writable(false)
export const user = writable({})
export const Todos = writable([])
export function loginUser(formData) {
    user.update(() => {
        return formData
    });
    console.log(get(user))
}