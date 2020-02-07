import React, {useState, useEffect, Component} from 'react';
import Axios from 'axios';
import './App.scss';


function User({name, handle, status_for_handle, imgURL, CFimgURL, loading}){
  
  return( 
    <a href={`https://codeforces.com/profile/${handle}`}>
      <div className='user'>
          <h3 className='main'> {name} </h3>
          <h3 className='display-on-hover'> {handle} </h3>

          <img className='main' src={`images/${imgURL}`}/>
          <img className='display-on-hover' src={`images/${handle}.jpg`}/>

          <div className='status'>
              {loading && <i class="fa fa-spin fa-refresh"></i>}
              {!loading && <div id={status_for_handle.replace(/\s/g,'-')}>{status_for_handle}</div>}
          </div>
      </div>
    </a>
  )
}


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:-1, index: 'A', 
      users: {'Hanii.Gerges': 'HIDE', 'Mr.N_Nabhani': 'HIDE', 'theBiker': 'HIDE'},
      isLoading: false
    };
  }

  makeRequest = async ()=>{
    let requests = {user_names: [], calls: []};

    const [id, index] = [this.state.id, this.state.index];
    console.log(id, index);

    for (const user in this.state.users) {
      requests.user_names.push(user);
      requests.calls.push(
        Axios.get('https://codeforces.com/api/user.status',
        {params: {handle: user}}
        )
      );
    }

    requests.calls = await Promise.all(requests.calls);
    
    let initObj = {'Hanii.Gerges': 'NOT SOLVED', 'Mr.N_Nabhani': 'NOT SOLVED', 'theBiker': 'NOT SOLVED'};
    
    for(let i = 0; i < requests.user_names.length; ++i){
      let req = requests.calls[i];

      for(const res of req.data.result){

        if(res.problem.contestId === this.state.id && res.problem.index === this.state.index){

          if(res.verdict === 'OK')
            initObj[requests.user_names[i]] = 'SOLVED';
          else
            initObj[requests.user_names[i]] = 'TRIED';

          break;
        }
      }
    }
    
    this.setState({
      users: initObj,
      isLoading: false,
    })
  }

  handleChange = (e)=>{

    let str = e.target.value.replace(/\s/g,'').toUpperCase();
    console.log(str);
    const id = Number(str.slice(0, str.length-1));
    const index = str[str.length-1];

    if(str === ''){
      this.setState({
        users: {'Hanii.Gerges': 'HIDE', 'Mr.N_Nabhani': 'HIDE', 'theBiker': 'HIDE'},
        isLoading: false
      });
      return;
    }
    
    this.setState({
      id: id,
      index: index,
      isLoading: true
    }, ()=>this.makeRequest());

  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
  
          <h1> Did the PPG Solve Problem </h1>
          <input type='text' onChange={(e)=>this.handleChange(e)}/>
          <h1> ? </h1>
  
        </header>
  
        <main>
            <div className='users-area'>
  
                <User
                  name='Hanii'
                  handle='Hanii.Gerges'
                  status_for_handle={this.state.users['Hanii.Gerges']}
                  imgURL='Hanii.jpg'
                  CFimgURL=''
                  loading={this.state.isLoading}
                />

                <User
                  name='Najm'
                  handle='Mr.N_Nabhani'
                  status_for_handle={this.state.users['Mr.N_Nabhani']}
                  imgURL='Najm.jpg'
                  CFimgURL=''
                  loading={this.state.isLoading}
                />

                <User
                  name='Maher'
                  handle='theBiker'
                  status_for_handle={this.state.users['theBiker']}
                  imgURL='Maher.png'
                  CFimgURL=''
                  loading={this.state.isLoading}
                />

            </div>
        </main>
  
      </div>
    );
  }

}

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


export default App;
