import Cookies from 'js-cookie';
import {loginByEmail, getUserInfo, logOut} from '../../api/index'

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
	    SET_STATUS: (state, status) => {
	      state.status = status;
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
	    LOGIN_SUCCESS: () => {
	      console.log('login success')
	    },
	    LOGOUT_USER: state => {
	      state.user = '';
	    }
	},
	actions:{
		LoginByEmail({commit},userInfo){
			const email = userInfo.email.trim();
			return new Promise((resolve, reject) => {

				loginByEmail(email,userInfo.passowrd).then(response => {
					const data = response.data;
					Cookies.set('My-Token',response.data.token);
					commit('SET_TOKEN',data.token);
					resolve();
				}).catch(error => {
					reject(error);
				});

				// if(email === 'test@admin.com'){
				// 	Cookies.set('My-Token','admin');
				// 	commit('SET_TOKEN','token');
				// 	resolve();
				// }
				// if(email === 'test@editor.com'){
				// 	Cookies.set('My-Token','editor');
				// 	commit('SET_TOKEN','token');
				// 	resolve();
				// }
				// if(email === 'test@developer.com'){
				// 	Cookies.set('My-Token','developer');
				// 	commit('SET_TOKEN','token');
				// 	resolve();
				// }
				// reject("Invalid email or password");
			});
		},
		GetInfo({commit, state}){

		}
	}
}
export default user;


