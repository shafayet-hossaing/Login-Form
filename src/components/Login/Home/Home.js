import React from 'react';
import useUser from '../../../hooks/useUser';

const Home = () => {
    
  const [user] = useUser()
  console.log(user);
    return (
        <div>
            <h1>{user?.displayName}</h1>
        </div>
    );
};

export default Home;