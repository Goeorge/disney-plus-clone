import axios from "axios";

export default {
	getData: () =>
		axios({
			method: "GET",
			url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
			params: { type: "get-trending-movies", page: "1" },
			headers: {
				"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
				"x-rapidapi-key": "8d175e5958msh7eac8b5deacdd3ap1a018ejsnf5064005508b",
			},
		}),
};
