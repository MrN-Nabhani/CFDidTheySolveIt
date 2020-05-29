import { ADD_USER, REMOVE_USER } from "../actions/types";

const initialState = {
	'Hanii.Gerges': 'HIDE',
	'Mr.N_Nabhani': 'HIDE', 
	'theBiker': 'HIDE', 
};

export default function(state = initialState, action) {
	switch(action.type){

		case ADD_USER:
			return {
				...state,
				[action.payload]: "HIDE",
			}

		case REMOVE_USER:
			return {
				...state,
			}

		default:
			return state;
	}

}