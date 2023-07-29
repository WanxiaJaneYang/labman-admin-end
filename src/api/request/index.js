import axios from "axios";

const API_URL=process.env.REACT_APP_BASE_API_URL;
const API_URL_REQUEST=API_URL+"/request";

export const getPendingRequest=async ()=>{
	try{
		const urlParams = new URLSearchParams({request_status:0}).toString();
		const response=await axios.get(API_URL_REQUEST+"?"+urlParams);
		if(response.status === 200){
			return response.data;
		}
	}
	catch(error){
		if(error.response){
			throw new Error(error.response.data.error);
		}else{
			throw new Error(error.message);
		}
	}
};

export const getPendingRequestByTypenameAndStudentId=async (values)=>{
	try{
		const urlParams= new URLSearchParams(values);
		urlParams.append("request_status",0);
		const response=await axios.get(API_URL_REQUEST+"?"+urlParams);
		if(response.status === 200){
			return response.data;
		}
	}
	catch(error){
		if(error.response){
			throw new Error(error.response.data.error);
		}else{
			throw new Error(error.message);
		}
	}
};

export const postRequest=async (values)=>{
	try{
		const response=await axios.post(API_URL_REQUEST,values);
		if(response.status === 200){
			return;
		}
	}
	catch(error){
		if(error.response){
			throw new Error(error.response.data.error);
		}else{
			throw new Error(error.message);
		}
	}
};

export const putRequest=async (values)=>{
	try{
		const response=await axios.put(API_URL_REQUEST+"/"+values.request_id,values);
		if(response.status === 200){
			return;
		}
	}catch(error){
		if(error.response){
			throw new Error(error.response.data.error);
		}else{
			throw new Error(error.message);
		}
	}
};

export const cancelRequest=async (request_id, values)=>{
	try{
		const response=await axios.patch(API_URL_REQUEST+"/cancel/"+request_id, values);
		if(response.status === 200){
			return;
		}
	}catch(error){
		if(error.response){
			throw new Error(error.response.data.error);
		}else{
			throw new Error(error.message);
		}
	}
};

export const collectRequest=async (request_id)=>{
	try{
		const response=await axios.patch(API_URL_REQUEST+"/collect/"+request_id);
		if(response.status === 200){
			return;
		}
	}catch(error){
		if(error.response){
			throw new Error(error.response.data.error);
		}else{
			throw new Error(error.message);
		}
	}
};