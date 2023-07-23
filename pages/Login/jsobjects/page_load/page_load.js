export default {
	async checkLoggedIn () {
		if (appsmith.URL.queryParams.code != null) {
			storeValue('jwt', post_token.data);
			navigateTo("Stories");
		}
	}
}