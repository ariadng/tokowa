
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.scss";
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
// import { registerSW } from "virtual:pwa-register";

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);

// const updateSW = registerSW({
// 	onOfflineReady() { },
// });
