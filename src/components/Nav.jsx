import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Nav.scss";

const Nav = () => {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else {
				handleShow(false);
			}
		});

		return () => {
			window.removeEventListener("scroll", () => {});
		};
	}, []);

	return (
		<div className={`nav${show ? " nav-black" : ""}`}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
				alt="netflix-logo"
				className="nav-logo"
			/>

			<img
				src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
				alt="netflix-avatar"
				className="nav-avatar"
			/>
		</div>
	);
};

export default Nav;
