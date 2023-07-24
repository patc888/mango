export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
	},
	async checkLoggedIn () {
		if (appsmith.store.jwt == null) {
			navigateTo("Login");
		}
		var stories = get_stories.data;
		if (stories != null && stories.hasOwnProperty('message') && stories.message == "Unauthorized") {
			await removeValue('stories');
			navigateTo("Login");
			return;
		}
		await storeValue('stories', stories);
		return 200;
	}
}