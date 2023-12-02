
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.scss";
import { AppView } from './views/app/app.view';
import { WelcomePage } from './pages/welcome/welcome.page';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AppView>
			<WelcomePage />
		</AppView>
	</React.StrictMode>,
)
