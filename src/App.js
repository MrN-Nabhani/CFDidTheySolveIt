import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import User from './Components/User.jsx';
import AddUserBtn from './Components/AddUserBtn.jsx';

import './Styling/App.scss';

import Axios from 'axios';

/*
  * Fix the case of letter followed with a number in the "problem index".

  ~ Add more users.

  * Better responsiveness.

  ~ Functional Component with useEffect.
  
*/

function App() {
  const [isLoading, setLoading] = useState(false);
  const [queryProblem, setQueryProblem] = useState({id: '', index: ''});

	const storedUsers = useSelector(state => state.users);
	// console.log(storedUsers);
	
	const [users, setUsers] = useState(storedUsers); //? Stored in Redux


  const makeRequest = async ()=>{
    let requests = {user_names: [], calls: []};
    
    let updatedUsersData = {}; // {'handle': 'STATUS'}

    for (const user in storedUsers) {
      requests.user_names.push(user);
      requests.calls.push(
        Axios.get('https://codeforces.com/api/user.status',
        {params: {handle: user}}
        )
      );
      updatedUsersData[user] = 'NOT SOLVED';
    }

    requests.calls = await Promise.all(requests.calls);
    
    //? forEach
			for(let i = 0; i < requests.user_names.length; ++i){
				let req = requests.calls[i];

				for(const res of req.data.result){

					if(res.problem.contestId === queryProblem.id && res.problem.index === queryProblem.index){

						if(res.verdict === 'OK')
							updatedUsersData[requests.user_names[i]] = 'SOLVED';
						else
							updatedUsersData[requests.user_names[i]] = 'TRIED';

						break;
					}
				}
			}
		
		// Dispatch({action: updateUsers,  payload: newusersData})
		setUsers(updatedUsersData);
	}
	
	useEffect(()=>{
		setUsers(storedUsers);
			
	}, [storedUsers]);

	useEffect(()=>{
		setLoading(true);

		makeRequest().then(()=>{
			setLoading(false);
		});

	}, [storedUsers, queryProblem]);


	
  const handleChange = (evt)=>{

		let str = evt.target.value.replace(/\s/g,'').toUpperCase();
		
    const id = parseInt(str);
    const index = str.replace(id, '');

    if(str.length === 0 || isNaN(id) || index === ''){
      return;
    }
		
		setQueryProblem({id, index});

	}
	
  return (
		<div className="App">
			<header className="App-header">

				<h1> Who Solved Problem  </h1>
				<input autoFocus type='text' pattern='\d+\w\d?'
				title='Not a valid problem' 
				placeholder='1272C'
				onChange={(evt)=>handleChange(evt)}/>
				<h1> ? </h1>  

			</header>

			<main>
					<div className='users-area'>

							{
								Object.entries(users).map(
									([user_name, user_status], idx) =>
									<User key={idx}
										handle={user_name}
										status_for_handle={user_status}
										loading={isLoading}
									/>
								)
							}

							<AddUserBtn/>

					</div>
			</main>

		</div>
	);
}

export default App


// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       id:-1, index: 'A', 
//       users: {'Hanii.Gerges': 'HIDE', 'Mr.N_Nabhani': 'HIDE', 'theBiker': 'HIDE'},
//       isLoading: false
//     };
// }

//   // makeRequest = async ()=>{
//   //   let requests = {user_names: [], calls: []};

//   //   const [id, index] = [this.state.id, this.state.index];
//   //   console.log(id, index);
    
//   //   let initObj = {}; //'Hanii.Gerges': 'NOT SOLVED', 'Mr.N_Nabhani': 'NOT SOLVED', 'theBiker': 'NOT SOLVED'

//   //   for (const user in this.state.users) {
//   //     requests.user_names.push(user);
//   //     requests.calls.push(
//   //       Axios.get('https://codeforces.com/api/user.status',
//   //       {params: {handle: user}}
//   //       )
//   //     );
//   //     initObj[user] = 'NOT SOLVED';
//   //   }

//   //   requests.calls = await Promise.all(requests.calls);
    
    
//   //   for(let i = 0; i < requests.user_names.length; ++i){
//   //     let req = requests.calls[i];

//   //     for(const res of req.data.result){

//   //       if(res.problem.contestId === this.state.id && res.problem.index === this.state.index){

//   //         if(res.verdict === 'OK')
//   //           initObj[requests.user_names[i]] = 'SOLVED';
//   //         else
//   //           initObj[requests.user_names[i]] = 'TRIED';

//   //         break;
//   //       }
//   //     }
//   //   }
    
//   //   this.setState({
//   //     users: initObj,
//   //     isLoading: false,
//   //   })
//   // }

//   handleChange = (e)=>{

//     let str = e.target.value.replace(/\s/g,'').toUpperCase();
//     console.log(str);
//     const id = Number(str.slice(0, str.length-1));
//     const index = str[str.length-1];

//     if(str === ''){
//       this.setState({
//         users: {'Hanii.Gerges': 'HIDE', 'Mr.N_Nabhani': 'HIDE', 'theBiker': 'HIDE'},
//         isLoading: false
//       });
//       return;
//     }
    
//     this.setState({
//       id: id,
//       index: index,
//       isLoading: true
//     }, ()=>this.makeRequest());

//   }

//   render(){
   
//   }

// }

/*
function App() {

  const [searchVar, setSearchVar] = useState({id:-1, idx: 'A'});
  useEffect(()=>{
      makeRequest();
  });
  
  const [users, setUsers] = useState({'Hanii.Gerges': '...', 'Mr.N_Nabhani': '...', 'theBiker': '...'});

  const makeRequest = async ()=>{
    let requests = {user_names: [], calls: []};

    const {id, idx} = searchVar;
    console.log(id, idx);

    for (const user in users) {
      requests.user_names.push(user);
      requests.calls.push(
        axios.get('https://codeforces.com/api/user.status',
        {params: {handle: user}}
        )
      );
    }

    requests.calls = await Promise.all(requests.calls);
    
    let initObj = {'Hanii.Gerges': 'NOT SOLVED', 'Mr.N_Nabhani': 'NOT SOLVED', 'theBiker': 'NOT SOLVED'};
    
    for(let i = 0; i < requests.user_names.length; ++i){
      let req = requests.calls[i];

      for(const res of req.data.result){

        if(res.problem.contestId === id && res.problem.index === idx){

          if(res.verdict === 'OK')
            initObj[requests.user_names[i]] = 'SOLVED';
          else
            initObj[requests.user_names[i]] = 'TRIED';

          break;
        }
      }
    }
    
    setUsers(initObj);
  }
  //1293C

  const handler = (e)=>{
    let str = e.target.value;
    const id = Number(str.slice(0, str.length-1));
    const idx = str[str.length-1];
    setSearchVar({id, idx});
  }
  
  return (
    <div className="App">
      <header className="App-header">

        <h1> Did the PPG Solve Problem </h1>
        <input type='text' onChange={(e)=>handler(e)}/>
        <h1> ? </h1>

      </header>

      <main>
          <div className='users-area'>

              <User
                name='Hanii'
                handle={users['Hanii.Gerges']}
                imgURL='Hanii.jpg'
                loading={false}
              />

              <div className='user'>
                <h3> Najm </h3>

                <img src='Najm.jpg'/>

                <div className='status'>
                  { false && <i class="fa fa-spin fa-refresh"></i>}
                  { !false && users['Mr.N_Nabhani']}
                </div>
              </div>

              <div className='user' >
                <h3> Maher </h3>

                <img src='Maher.png'/>
                
                <div className='status'>
                    {users['theBiker']}
                </div>

              </div>
          </div>
      </main>

    </div>
  );
}
*/


//export default App;
