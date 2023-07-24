export default {
	async checkLoggedIn () {
		console.log(appsmith.URL.queryParams);

		if (appsmith.URL.queryParams.hasOwnProperty('code')) {
			var token = post_token.run();
			await storeValue('jwt', await token);
			navigateTo("Stories");
		} else {
			console.log("else");
		}
		return 200;
	},
	async signout() {
		await removeValue('jwt');
		await removeValue('stories');
		navigateTo("https://mango.auth.us-west-2.amazoncognito.com/logout?client_id=2rorg9emamtqlnnbcqh0av15bv&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fapp.appsmith.com%2Fapp%2Fmango%2Flogin-64b96b1831620d2266b2992f%2Fedit")
	}
}