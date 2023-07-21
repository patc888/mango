export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		// If code is present, use it to get the jwt
		if (appsmith.URL.queryParams.code) {
			storeValue('jwt', post_token.data);
			navigateTo("Stories");
			if (!appsmith.store.vocab) {
				storeValue('vocab', new Map());
			};
		};
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}