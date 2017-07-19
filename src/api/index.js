import axiosIns from '../utils/axiosIns'


export function loginByEmail(email, password){
	const data ={
		email: email,
		password: password
	}
	return axiosIns({
		// for error testing, uncomment below line
		//url:'http://www.mocky.io/v2/596f198f0f000095026b73b2',
		// and comment below line
		url:'http://www.mocky.io/v2/596f169c0f000061026b73aa',
		method:'post',
		data
	});
}

export function getUserInfo(token){
	const data ={
		token: token
	}
	return axiosIns({
		url:'getinfo_url_here',
		method:'post',
		data
	});
}

export function logout(token){
	const data ={
		token: token
	}
	return axiosIns({
		url:'logout_url_here',
		method:'post',
		data
	});
}