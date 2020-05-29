import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_USER } from '../Redux/actions/types';

import '../Styling/UserBtn.scss';

import Axios from 'axios';

function AddUserBtn(){
	
	const [user, setUser] = useState('');
	const dispatch = useDispatch();

	const addNewUser = ()=>{

		 Axios.get('https://codeforces.com/api/user.status', {params: {handle: user}}).then(
			 (res)=>{
				console.log(`user found!`);

				dispatch({
					type: ADD_USER,
					payload: user
				});
				
				setUser('');

			 }
		 ).catch((err) => {
				alert('user not found!');
				console.log(`user not found`);
				throw err;
		 });
	}

	return(

		<div className='addUserBtn'>
			<h3> Add User </h3>
			
			<button id='btn' onClick={()=>{addNewUser()}}>+</button>

			<input value={user} id='in' type="text" placeholder="enter handle"
			onChange={ (evt)=>{setUser(evt.target.value)} } />

		</div>

	);
}


export default AddUserBtn;