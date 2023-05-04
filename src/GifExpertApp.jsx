import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Dragon Ball']);
	const [limit, setLimit] = useState(5);

	const onAddCategory = (newCategory, limit) => {
		if (categories.includes(newCategory)) return;
		setLimit(limit);
		setCategories([newCategory, ...categories]);
	};
	const onRemoveCategory = deleteCategory => {
		setCategories(categories.filter(category => category !== deleteCategory));
	};

	return (
		<>
			<h1>Buscar Gifs</h1>

			<AddCategory
				onNewCategory={(event, limit) => onAddCategory(event, limit)}
			/>
			{categories.map(category => (
				<GifGrid
					onRemoveCategory={event => onRemoveCategory(event)}
					key={category}
					category={category}
					limit={limit}
				/>
			))}
		</>
	);
};
