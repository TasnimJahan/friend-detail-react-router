import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name,email,id} = props.friends;
    const history = useHistory();

    const handleClick = (friendId)=>{
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    const friendStyle = {
        border: '1px solid purple',
        margin:'20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <button onClick={()=>{handleClick(id)}}>click me</button>
            {/* <Link to={`/friend/${id}`}><button>Click to see details of Id: {id}</button></Link> */}
        </div>
    );
};

export default Friend;