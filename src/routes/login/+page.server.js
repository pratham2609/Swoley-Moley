import { redirect } from '@sveltejs/kit';
import { loginUser } from '../../store';
import { goto } from '$app/navigation';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
	// const user = await db.getUserFromSession(cookies.get('sessionid'));
	// return { user };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, url }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		loginUser({
			email,
			password
		})
			throw redirect(303, '/');
	}
};