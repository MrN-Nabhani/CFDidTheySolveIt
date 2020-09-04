import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddUser } from '../Redux/actions/AddUser';

import '../Styling/UserBtn.scss';

import Axios from 'axios';

const AddUserBtn = () =>{
	
	const [user, setUser] = useState('');
	const dispatch = useDispatch();

	const addNewUser = ()=>{
		Axios.get('https://codeforces.com/api/user.status', {params: {handle: user}}).then(
			(res)=>{
				dispatch(AddUser(user));				
				setUser('');
			}
		).catch((err) => {
			alert('user not found!');
		});
	}

	return(

		<div className='addUserBtn'>
			<h3> Add User </h3>
			
			<button className='btn' onClick={()=>{addNewUser()}}>+</button>

			<input value={user} className='handleInputField' type="text" placeholder="enter handle"
			onChange={ (evt)=>{setUser(evt.target.value)} } />

		</div>

	);
}


export default AddUserBtn;