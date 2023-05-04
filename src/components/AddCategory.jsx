import { useState } from 'react';
import PropType from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');
	const [limit, setLimit] = useState(1);

	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};
	const onLimitChange = ({ target }) => {
		setLimit(+target.value);
	};

	const onSubmit = event => {
		event.preventDefault();
		if (inputValue.trim().length <= 1 || limit < 1 || limit > 30) return;
		onNewCategory(inputValue.trim(), limit);
		setInputValue('');
	};

	return (
		<form onSubmit={onSubmit} aria-label='form'>
			<input
				className='txt-buscar'
				type='text'
				placeholder='Happy, Anime, Matrix'
				value={inputValue}
				onChange={onInputChange}
			/>
			<input
				className='limit'
				type='number'
				placeholder='20'
				value={limit}
				onChange={onLimitChange}
			/>
			<button className='btn-buscar' type='submit'>
				Buscar
			</button>
		</form>
	);
};

AddCategory.propTypes = {
	onNewCategory: PropType.func.isRequired,
};
