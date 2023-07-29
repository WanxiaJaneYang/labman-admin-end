import axios from "axios";

const API_URL=process.env.REACT_APP_BASE_API_URL;
const API_URL_RETURN=API_URL+"/return";

export const getBorrowedRecords = async () => {
	try{
		const response = await axios.get(API_URL_RETURN, {
			params: {
				borrow_status: "0",
			},
		});
		if (response.status === 200) {
			const data = response.data;
			return data;
		}
	}catch(error){
		if(error.response){
			throw new Error(error.response.data.error);
		}else{
			throw new Error(error.message);
		}
	}
};

export const getReturnedRecords = async () => {
	try{
		const response = await axios.get(API_URL_RETURN, {
			params: {
				borrow_status: "1",
			},
		});
		if (response.status === 200) {
			const data = response.data;
			return data;
		}
	}catch(error){
		if(error.response){
			throw new Error(error.response.data.error);
		}else{
			throw new Error(error.message);
		}
	}
};

export const searchReturnedRecord= async (values) => {
	const urlParams = new URLSearchParams(values);
	urlParams.append("borrow_status", "1");
	try{
		const response = await axios.get(API_URL_RETURN+"?"+urlParams);
		if (response.status === 200) {
			const data = response.data;
			return data;
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

export const confirmReturn = async (borrow_id, return_amount) => {
	try{
		const response = await axios.patch(API_URL_RETURN+"/"+borrow_id+"?return_amount="+return_amount);
		if (response.status === 200) {
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

export const cancelReturnedRecord = async (borrow_id, return_amount) => {
	try{
		const response = await axios.patch(API_URL_RETURN+"/cancel/"+borrow_id+"?return_amount="+return_amount);
		if (response.status === 200) {
			return;
		} }catch(error){
		if(error.response){
			throw new Error(error.response.data.error);
		}else{
			throw new Error(error.message);
		}
	}
};

export const searchBorrowRecord = async (values) => {
	const urlParams = new URLSearchParams(values);
	urlParams.append("borrow_status", "0");
	try{
		const response = await axios.get(API_URL_RETURN+"?"+urlParams);
		if (response.status === 200) {
			const data = response.data;
			return data;
		}
	} catch(error){
		if(error.response){
			throw new Error(error.response.data.error);
		}else{
			throw new Error(error.message);
		}
	}
};