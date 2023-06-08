import React from 'react';
import Landing from './LandingPage/Landing';
import Dashboard from './Dashboard';
import { useState } from 'react';

const Dash = () => {
    const [Authorised , setAuthorised] = useState(false);

    return (
        <div>
            {Authorised ? <Landing/> :
              <Dashboard/>
            }
        </div>
    );
}

export default Dash;
