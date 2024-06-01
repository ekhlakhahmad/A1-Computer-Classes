// src/components/Switcher.jsx
import { useContext } from "react";
import {
	MdDarkMode,
	MdOutlineLightMode,
} from "react-icons/md";
import ThemeContext from "../context/ThemeContext";

const Switcher = () => {
	const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

	return (
		<div
			onClick={() =>
				changeCurrentTheme(currentTheme === "light" ? "dark" : "light")
			}
      className="flex items-center cursor-pointer"
			>
			{currentTheme === "light" ? (
				<MdDarkMode  />
			) : (
				<MdOutlineLightMode  />
			)}
		</div>
	);
};

export default Switcher;
