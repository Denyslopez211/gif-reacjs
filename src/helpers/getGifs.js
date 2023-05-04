export const getGifs = async (category, limit) => {
	const url = `https://api.giphy.com/v1/stickers/search?api_key=LGCUDOzGk7BJw65fhiKFxQON1gnUCFF5&q=${category}&limit=${limit}`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map(img => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url,
	}));

	return gifs;
};

// const url = `https://api.giphy.com/v1/stickers/trending?api_key=LGCUDOzGk7BJw65fhiKFxQON1gnUCFF5&limit=${limit}`;
// // const url = `https://api.giphy.com/v1/gifs/search?api_key=LGCUDOzGk7BJw65fhiKFxQON1gnUCFF5&q=${category}&limit=${limit}`;
// 	const url = `https://api.giphy.com/v1/stickers/search?api_key=LGCUDOzGk7BJw65fhiKFxQON1gnUCFF5&q=${category}&limit=${limit}`;
// const url = `https://api.giphy.com/v1/stickers/translate?api_key=LGCUDOzGk7BJw65fhiKFxQON1gnUCFF5&s=${category}&limit=${limit}`;
// const url = `https://api.giphy.com/v2/emoji?api_key=LGCUDOzGk7BJw65fhiKFxQON1gnUCFF5&limit=${limit}`;
