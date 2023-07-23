export default {
	async checkLoggedIn () {
		if (appsmith.URL.queryParams.code != null) {
			var token = post_token.data;
			await storeValue('jwt', token);
			navigateTo("Stories");
		}
		return 200;
	}
}