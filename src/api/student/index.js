import axios from "axios";

const API_URL=process.env.REACT_APP_BASE_API_URL;
const API_URL_STUDENT=API_URL+"/users";

export const getStudentData=async ()=>{
	try{
		const response = await axios.get(API_URL_STUDENT);
		if(response.status === 200){
			return response.data;
		}
	}catch(error){
		if(error.response){
			throw new Error(error.response.data.error);
		}else{
			throw new Error(error.message);
		}
	}
};

export const postStudent=async (values)=>{
	try{
		const response = await axios.post(API_URL_STUDENT,values);
		if(response.status === 201){
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

export const deleteStudent=async (id)=>{
	try{
		const response = await axios.delete(API_URL_STUDENT+"/"+id);
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

export const getStudentById=async (id)=>{
	try{
		const response = await axios.get(API_URL_STUDENT+"/"+id);
		if(response.status === 200){
			return response.data;
		}
	}catch(error){
		if(error.response){
			throw new Error(error.response.data.error);
		}else{
			throw new Error(error.message);
		}
	}
};
