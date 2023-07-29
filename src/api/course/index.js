import axios from "axios";

const API_URL=process.env.REACT_APP_BASE_API_URL;
const API_URL_COURSE = API_URL+"/course";

export const getAllCourses = async () => {
	try{
		const response = await axios.get(API_URL_COURSE);
		return response.data;
	}catch(error){
		if(error.response && error.response.status === 404){
			return [];
		}else if(error.response){
			throw new Error(error.response.data.error);
		}else{
			throw new Error(error.message);
		}
	}
};

export const getCourseByCoursenameAndCoordinator = async (course_name, coordinator_name) => {
	const urlParmas = new URLSearchParams();
	urlParmas.append("course_name",course_name);
	urlParmas.append("coordinator_name",coordinator_name);

	try{
		const response = await axios.get(API_URL_COURSE+"?"+urlParmas.toString());
		return response.data;
	}catch(error){
		if(error.response){
			throw new Error(error.response.data.error);
		}else{
			throw new Error(error.message);
		}
	}
};

export const getCourseById = async (id) => {
	try{
		const response = await axios.get(API_URL_COURSE+"/"+id);
		return response.data;
	}catch(error){
		if(error.response){
			throw new Error(error.response.data.error);
		}else{
			throw new Error(error.message);
		}
	}
};

export const postCourse = async (values) => {
	try{
		const response = await axios.post(API_URL_COURSE,values);
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

export const deleteCourse = async (id) => {
	try{
		const response = await axios.delete(API_URL_COURSE+"/"+id);
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

export const editCourse = async (id,values) => {
	try{
		const response = await axios.put(API_URL_COURSE+"/"+id,values);
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