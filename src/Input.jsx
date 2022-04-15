import React from 'react' ;

let user , dist,day ;

const Input = (props) => {
    const nameChange = (e) => {
        user = e.target.value ;
    }

    const originChange = (e) => {
        dist = parseInt(e.target.value) ;
    }

    const dayChange = (e) => {
        day = e.target.value ;
    }

    const getData = () => {
        props.name(user) ;
        props.origin(dist) ;
        props.day(day) ;
    }
    return(
        <>
        <form onSubmit={getData} >
            <input type='text' placeholder='Enter your name' id='name-input' onChange={nameChange}/>
            <input type='text' placeholder='Enter your origin station code' onChange ={originChange} />
            <input type='date' placeholder='Enter date' onChange={dayChange}/>
            <button onClick={getData}>Submit</button>
        </form>
        </>
    );
}

export default Input ;