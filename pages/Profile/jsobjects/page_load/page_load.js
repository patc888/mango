export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async checkedLoggedIn () {
		if (appsmith.store.jwt == null) {
			navigateTo("Login");
		}
	}
}