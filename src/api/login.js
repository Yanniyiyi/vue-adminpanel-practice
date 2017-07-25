import axiosIns from '../utils/axiosIns'


export function loginByEmailAdmin(email, password){
	const data ={
		email: email,
		password: password
	}
	return axiosIns({
		// for error testing, uncomment below line
		//url:'http://www.mocky.io/v2/596f198f0f000095026b73b2',
		// and comment below line
		url:'https://www.mocky.io/v2/5971fce8120000eb04bb7495',
		method:'post',
		data
	});
}

export function loginByEmailEditor(email, password){
	const data ={
		email: email,
		password: password
	}
	return axiosIns({
		// for error testing, uncomment below line
		//url:'http://www.mocky.io/v2/596f198f0f000095026b73b2',
		// and comment below line
		url:'https://www.mocky.io/v2/5971fd2e120000d404bb7498',
		method:'post',
		data
	});
}


export function getUserInfoAdmin(token){
	const data ={
		token: token
	}
	return axiosIns({
		url:'https://www.mocky.io/v2/5971f9ed120000ed04bb7480',
		method:'post',
		data
	});
}

export function getUserInfoEditor(token){
	const data ={
		token: token
	}
	return axiosIns({
		url:'https://www.mocky.io/v2/5971fefb120000f704bb74aa',
		method:'post',
		data
	});
}


export function logOut(){
	return axiosIns({
		url:'https://www.mocky.io/v2/5971fefb120000f704bb74aa',
		method:'post',
	});
}