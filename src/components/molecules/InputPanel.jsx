import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputField from './InputField';
import {
	setTitle,
	setSubTitle,
	setCategory,
	selectInput,
} from '../../redux/module/inputTextSlice';

export default function InputPanel() {
	const { title, subTitle, category } = useSelector(selectInput);
	const dispatch = useDispatch();

	const handleTitleChange = (newTitle) => {
		dispatch(setTitle(newTitle));
	};

	const handleSubTitleChange = (newSubTitle) => {
		dispatch(setSubTitle(newSubTitle));
	};

	const handleCategoryChange = (newCategory) => {
		dispatch(setCategory(newCategory));
	};

	return (
		<div>
			<InputField
				label="Title"
				id="제목"
				value={title}
				onChange={(e) => handleTitleChange(e.target.value)}
			/>
			<InputField
				label="SubTitle"
				id="부제목"
				value={subTitle}
				onChange={(e) => handleSubTitleChange(e.target.value)}
			/>
			<InputField
				label="Category"
				id="카테고리"
				value={category}
				onChange={(e) => handleCategoryChange(e.target.value)}
			/>
		</div>
	);
}
