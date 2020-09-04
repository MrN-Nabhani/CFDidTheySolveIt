import { ADD_USER, REMOVE_USER } from "../actions/types";
import _ from 'lodash';

const initialState = [
	'Hanii.Gerges',
	'Mr.N_Nabhani',
	'theBiker'
];

export default function(state = initialState, action) {
	switch(action.type){

		case ADD_USER:
			return [... new Set([
				...state,
				action.payload,
			])];

		case REMOVE_USER:
			return state.filter((user)=> user !== action.payload);

		default:
			return state;
	}

}