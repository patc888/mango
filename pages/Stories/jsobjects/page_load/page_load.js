export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
	},
	async checkLoggedIn () {
		if (appsmith.store.jwt == null) {
			navigateTo("Login");
		}
		try {
			console.log("getting stories");
			var stories = get_stories.data;
			if (stories.message == "Unauthorized") {
				console.log("error");				
   			navigateTo("Login");
			}
			console.log("got stories");
			console.log(stories);
		  await storeValue('stories', stories);
		} catch (e) {
			console.log("got error");
			console.log(e.message);
		}
		return 200;
	}
}