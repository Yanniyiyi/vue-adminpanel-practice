import Cookies from 'js-cookie';

// here I am using four different functions to fetch user's information
// but there should be only two functions loginByEmail and getUserInfo 
// the reason why I did this is I created four faked apis. 
// In production env, the backend should response correct data based on
// user's login info

import {loginByEmailAdmin,loginByEmailEditor,getUserInfoEditor, getUserInfoAdmin, logOut} from '../../api/login'

const user = {
	state:{
		user: '',
		status: '',
		code: '',
		token: Cookies.get('My-Token'),
		name:'',
		avatar:'',
		introduction: '',
		roles: []
	},
	mutations:{
		CHANGE_PERM:(state) => {
			state.roles = ['editor'];
		},
		SET_CODE: (state, code) => {
      		state.code = code;
    	},
	    SET_TOKEN: (state, token) => {
	      state.token = token;
	    },
	    SET_INTRODUCTION: (state, introduction) => {
	      state.introduction = introduction;
	    },
	    SET_SETTING: (state, setting) => {
	      state.setting = setting;
	    },
	    SET_NAME: (state, name) => {
	      state.name = name;
	    },
	    SET_AVATAR: (state, avatar) => {
	      state.avatar = avatar;
	    },
	    SET_ROLES: (state, roles) => {
	      state.roles = roles;
	    },
	    LOGOUT_USER: state => {
	      	state.user='',
			state.status='',
			state.code = '',
			state.token = '',
			state.name = '',
			state.avatar = '',
			state.introduction ='',
			state.roles = []
	    }
	},
	actions:{
		ChangePermission({commit}){
			commit('CHANGE_PERM');
		},
		LoginByEmail({commit},userInfo){
			const email = userInfo.email.trim();
			return new Promise((resolve, reject) => {
				if(email === 'admin@test.com'){
					console.log('admin logged in');
					loginByEmailAdmin(email,userInfo.passowrd).then(response => {
						const data = response.data;
						Cookies.set('My-Token',response.data.token);
						commit('SET_TOKEN',data.token);
						resolve();
					}).catch(error => {
						reject(error);
					});
				}

				if(email === 'editor@test.com'){
					loginByEmailEditor(email,userInfo.passowrd).then(response => {
						const data = response.data;
						Cookies.set('My-Token',response.data.token);
						commit('SET_TOKEN',data.token);
						resolve();
					}).catch(error => {
						reject(error);
					});
				}

			});
		},
		GetInfo({commit, state }){
			return new Promise((resolve, reject) => {
				// should be the below method, 
				// getUserInfo(state.token).then((response) => {
				// 	const data = response.data;
				// 	commit('SET_NAME',data.name);
				// 	commit('SET_AVATAR',data.avatar);
				// 	commit('SET_ROLES', data.roles);
				// 	resolve(data);
				// }).catch((error)=>{
				// 	reject(error);
				// });
				
				// those two methods are using is because I am using fake api
				if(state.token === 'admin'){
					getUserInfoAdmin(state.token).then((response) => {
						const data = response.data;
						commit('SET_NAME',data.name);
						commit('SET_AVATAR',data.avatar);
						commit('SET_ROLES', data.roles);
						resolve(data);
					}).catch((error)=>{
						reject(error);
					});
				}

				if(state.token === 'editor'){
					getUserInfoEditor(state.token).then((response) => {
						const data = response.data;
						commit('SET_NAME',data.name);
						commit('SET_AVATAR',data.avatar);
						commit('SET_ROLES', data.roles);
						resolve(data);
					}).catch((error)=>{
						reject(error);
					});
				}
				
			});	
		},
		LogOut({commit}){
			return new Promise( (resolve, reject) => {
				logOut().then( response => {
					commit('LOGOUT_USER');
					Cookies.remove('My-Token');
					resolve();
				}).catch( error => {
					reject(error);
				})
			});

		}
	}
}
export default user;


