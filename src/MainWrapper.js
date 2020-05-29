import React from 'react'
import { Provider } from 'react-redux';
import store from './Redux/store';
import App from './App';

function MainWrapper() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
}

export default MainWrapper;