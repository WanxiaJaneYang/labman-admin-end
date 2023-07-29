import axios from "axios";

const API_URL=process.env.REACT_APP_BASE_API_URL;
const API_URL_COURSE = API_URL+"/course";
const API_URL_PACKAGE = API_URL+"/package";

export const getPackages = async (course_id) => {
	try{
		const response = await axios.get(API_URL_COURSE+"/"+course_id+"/package");
		if(response.status === 200){
			return response.data;
		}
	}catch(error){
		if(error.response){
			if(error.response.status === 404){
				return [];
			}else{
				throw new Error(error.response.data.error);
			}
		}else{
			throw new Error(error.message);
		}
	}
};

export const deletePackage = async ( package_id) => {
	try{
		const response = await axios.delete(API_URL_COURSE+"/package/"+package_id);
		if(response.status === 200){
			return;
		}}catch(error){
		if(error.response){
			throw new Error(error.response.data.error);
		}else{
			throw new Error(error.message);
		}
	}
};

export const addPackage = async (course_id, values) => {
	try{
		const response = await axios.post(API_URL_COURSE+"/"+course_id+"/package", values);
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

export const getPackageById = async ( package_id) => {
	try{
		const response = await axios.get(API_URL_PACKAGE+"/"+package_id);
		if(response.status === 200){
			return response.data;
		}
	}catch(error){
		if(error.response){
			if(error.response.status === 404){
				return [];
			}
			else{
				throw new Error(error.response.data.error);
			}
		}else{
			throw new Error(error.message);
		}
	}
};

export const getEquipmentInPackage = async (package_id, type_id) => {
	try{
		const response = await axios.get(API_URL_PACKAGE+"/"+package_id+"/"+type_id);
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

export const addEquipment = async (package_id, type_id, values) => {
	try{
		const response = await axios.post(API_URL_PACKAGE+"/"+package_id+"/"+type_id, values);
		if(response.status === 201){
			return ;
		}}catch(error){
		if(error.response){
			throw new Error(error.response.data.error);
		}else{
			throw new Error(error.message);
		}
	}
};

export const deleteEquipment = async (package_id, type_id) => {
	try{
		const response = await axios.delete(API_URL_PACKAGE+"/"+package_id+"/"+type_id);
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

export const editEquipment = async (package_id, type_id,values) => {
	try{
		const response = await axios.put(API_URL_PACKAGE+"/"+package_id+"/"+type_id, values);
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

