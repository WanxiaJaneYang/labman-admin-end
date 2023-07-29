import axios from "axios";

const API_URL=process.env.REACT_APP_BASE_API_URL;
const API_URL_EQUIPMENT=API_URL+"/equipment";

export const getEquipmentData=async ()=>{
	try{
		const response = await axios.get(API_URL_EQUIPMENT);
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

export const postEquipment=async (values)=>{
	try{
		const response = await axios.post(API_URL_EQUIPMENT,values);
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

export const deleteEquipment=async (id)=>{
	try{
		const response = await axios.delete(API_URL_EQUIPMENT+"/"+id);
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

export const getEquipmentByTypename=async (type_name)=>{
	const urlParmas=new URLSearchParams();
	urlParmas.append("type_name",type_name);
	try{
		const response = await axios.get(API_URL_EQUIPMENT+"?"+urlParmas.toString());
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

export const editEquipment=async (id,values)=>{
	try{
		const response = await axios.put(API_URL_EQUIPMENT+"/"+id,values);
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

export const getAvailableAmount=async (type_name)=>{
	const urlParmas=new URLSearchParams();
	urlParmas.append("type_name",type_name);
	try{
		const response = await axios.get(API_URL_EQUIPMENT+"?"+urlParmas.toString());
		if(response.status === 200){
			return response.data[0].available_amount;
		}
	}catch(error){
		if(error.response){
			throw new Error(error.response.data.error);
		}else{
			throw new Error(error.message);
		}
	}	
};