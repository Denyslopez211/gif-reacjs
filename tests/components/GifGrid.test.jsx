import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Prueba al component <GifGrid />', () => {
	const category = 'One Punch';

	test('Debe mostrarse primero el loading', () => {
		useFetchGifs.mockReturnValue({
			images: [],
			isLoading: true,
		});

		render(<GifGrid category={category} />);
		expect(screen.getByText('Cargando...'));
		expect(screen.getByText(`${category}`));
	});

	test('debe de mostrar item cuando se cargan las imágenes useFetchGifs', () => {
		const gifs = [
			{
				id: 'fs',
				title: 'Goku',
				url: 'https://media.giphy.com/media/l0000000000000001/giphy.gif',
			},
			{
				id: '433',
				title: 'Vegeta',
				url: 'https://media.giphy.com/media/l0000000000000002/giphy.gif',
			},
			{
				title: 'Pepe',
				id: 'sdfsd',
				url: 'https://media.giphy.com/media/l0000000000000003/giphy.gif',
			},
		];

		useFetchGifs.mockReturnValue({
			images: gifs,
			loading: false,
		});

		render(<GifGrid category={category} />);
		expect(screen.getAllByRole('img').length).toBe(3);
	});
});
