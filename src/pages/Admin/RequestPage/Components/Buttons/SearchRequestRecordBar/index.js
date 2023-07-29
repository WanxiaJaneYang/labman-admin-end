import { SearchOutlined } from "@ant-design/icons";
import { Button} from "antd";
import { Input, Space } from "antd";
import { useRequestRecordContext } from "../../../Context";
import { useState } from "react";

const SearchRequestRecordBar = () => {
	const [searchParams, setSearchParams] = useState({
		student_id: "",
		type_name: "",
	}); 
	const {onSearch} =useRequestRecordContext();

	const onClick = () => {
		onSearch(searchParams);
	};

	const onIDInputChange = (e) => {
		const trimValue=e.target.value.trim();
		setSearchParams({
			...searchParams,
			student_id:trimValue,
		});
	};

	const onEquipmentInputChange = (e) => {
		const trimValue=e.target.value.trim();
		setSearchParams({
			...searchParams,
			type_name:trimValue,
		});
	};

	return (
		<Space>
			<Input 
				onChange={onIDInputChange}
				placeholder="Input Student ID" 
				allowClear
				onPressEnter={onClick}
			/>
			<Input 
				onChange={onEquipmentInputChange}
				placeholder="Input Equipment Type" 
				allowClear
				onPressEnter={onClick}
			/>
			<Button 
				type="primary" 
				icon={<SearchOutlined />}
				onClick={onClick}
			>
				Search
			</Button>
		</Space>
	);
};

export default SearchRequestRecordBar;