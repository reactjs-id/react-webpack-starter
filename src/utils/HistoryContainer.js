let _router;
export default {
	set(router){
		_router = router;
	},
	get(){
		return _router;
	}
}