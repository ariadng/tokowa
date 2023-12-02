"use client";

import { ReactNode } from "react";
import styles from "./styles/style.module.scss";
import classNames from "classnames";

export function PageView(props: {
	className?: string;
	children?: ReactNode;
}) {

	return (
		<div className={classNames(
			styles.PageView,
			props.className,
		)}>
			{props.children}
		</div>
	);

}