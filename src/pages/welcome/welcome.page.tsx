"use client";

import { Button } from "../../library/ui";
import { PageView } from "../../views";
import styles from "./styles/style.module.scss";

export function WelcomePage() {
	return (
		<PageView className={styles.WelcomePage}>


			<div className={styles.Cover}>
				
				<div className={styles.Logo}>
					<img src="/assets/logotype.svg" />
				</div>

				<img className={styles.Background} src="/pages/welcome_cover.webp" />
				
				<div className={styles.Text}>
					<h1>
						Artificial Intelligence for your online business
					</h1>

					<p className={styles.Lead}>
						Using <strong>TokoWA</strong>, you can integrate the power of AI to help
						you run your online business. Managing orders, building product catalog,
						and tracking sales will be much easier.
					</p>

					<Button label="Login or Register" />
				</div>
			</div>

			

		</PageView>
	)
}