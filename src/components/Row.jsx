import React, { useState, useEffect } from "react";
import axios from "./../axios";
import "./Row.scss";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);

			setMovies(request.data.results);
			return request;
		}

		fetchData();
	}, [fetchUrl]);

	return (
		<div className="row">
			<h2>{title}</h2>

			<div className="row-posters">
				{movies.map((movie) => {
					return (
						<img
							loading="lazy"
							key={movie.id}
							className={`row-poster${
								isLargeRow ? " row-poster-large" : ""
							}`}
							src={`${base_url}${
								isLargeRow
									? movie.poster_path
									: movie.backdrop_path
							}`}
							alt={movie.name}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Row;
