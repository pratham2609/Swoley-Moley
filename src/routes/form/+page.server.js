/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
	// const user = await db.getUserFromSession(cookies.get('sessionid'));
	// return { user };
}

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		// const user = await db.getUser(email);
		// cookies.set('sessionid', await db.createSession(user), { path: '/' });
        console.log(email, password)
		return { success: true };
	},
	register: async (event) => {
		// TODO register the user
	}
};