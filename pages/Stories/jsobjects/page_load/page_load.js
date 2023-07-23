export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
	},
	async checkLoggedIn () {
		if (appsmith.store.jwt == null) {
			navigateTo("Login");
		}
	},
	get_stories () {
		try {
			return get_stories.data;
		} catch (error) {
			removeValue('jwt');
			showAlert(error);
			console.log(error);
			navigateTo("Login");
		}
	}
}