import React from 'react';
import '../Styling/user.scss';

function User({handle, status_for_handle, loading}){
  
return( 
        <a rel="noopener noreferrer" href={`https://codeforces.com/profile/${handle}`} target="_blank">
        <div className='user'>
            <h3> {handle} </h3>

            <img alt='' src={"images/user.png"}/>

            <div className='status'>
                {loading && <i className="fa fa-spin fa-refresh"></i>}
                {!loading && <div id={status_for_handle.replace(/\s/g,'-')}>{status_for_handle}</div>}
            </div>
        </div>
        </a>
    );
}

export default User;