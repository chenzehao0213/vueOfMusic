import api from './api';
import axios from 'axios';
import querystring from 'querystring';

//对data字符进行处理，get请求
const opera_req = (data) =>{
	return querystring.stringify(data);
}

//处理result data
const opera_res = (data) =>{
	return data;
}

export default async(pathName,queryData)=>{
	let str = "http://47.94.16.170:3000";
	let url = str.concat(api[pathName]);
	let result;
	if (queryData) {
		result = await axios.get(url,{
			params:queryData,
		});
	}
	else{
		result = await axios.get(url);
	}
	let resData = opera_res(result);
	return new Promise((resolve,reject)=>{
		resolve(resData);
	})
}
