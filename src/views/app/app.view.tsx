"use client";

import { Outlet } from "react-router-dom";
import styles from "./styles/style.module.scss";

export function AppView() {

	return (
		<div className={styles.AppView}>
			<Outlet />
		</div>
	);

}