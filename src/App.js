import React, { useState } from 'react' ;
import { Route,Routes } from 'react-router-dom';
import './App.css' ;
import Nearest from './Nearest';
import Navbar from './Navbar';
import Upcoming from './Upcoming';
import Past from './Past' ;
import Input from './Input' ;

const App = () => {
  const [rides,setRide] = useState([]) ;
  const [hash,setHash] = useState() ;
  const [user,setUser] = useState('') ;
  const [dist,setDist] = useState(0) ;
  const [day,setDay] = useState() ;

  const getRide = (ride) => {
    setRide(ride) ;
  }

  const getHash = (hash) => {
    setHash(hash) ;
  }

  const getUser = (user) => {
    setUser(user) ;
  }

  const getOrigin = (origin) => {
    setDist(origin) ;
  }

  const getDay = (d) => {
    setDay(d) ;
  }

  if(user == '')
  {
    return(
      <>
        <Routes>
        <Route exact path='/' element={<Input name={getUser} origin={getOrigin} day={getDay}/>} />
        </Routes>
      </>
    );
  }
  else
  {
  return(
    <>
      <Navbar name={user}/>
      {/* <Nearest ride={getRide} hash={getHash}/> */}
      <Routes>
        {/* <Route exact path='/' element={<Input name={getUser} origin={getOrigin}/>} /> */}
        <Route exact path = '/nearest' element={<Nearest ride={getRide} hash = {getHash} origin={dist}/> } />
        <Route exact path='/upcoming' element={<Upcoming ride={rides} hash={hash} origin={dist} day={day}/>} />
        <Route exact path='/past' element = {<Past ride = {rides} hash = {hash} day={day} origin={dist}/> } />
      </Routes>
    </>
  );
  }
}

export default App;
