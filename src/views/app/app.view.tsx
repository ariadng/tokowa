"use client";

import { ReactNode } from "react";
import styles from "./styles/style.module.scss";

export function AppView(props: {
	children?: ReactNode;
}) {

	return (
		<div className={styles.AppView}>
			{props.children}
		</div>
	);

}