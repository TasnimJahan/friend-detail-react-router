import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    let { friendId } = useParams();
    const [detailsOfFriend,setDetailsOfFriend]= useState({})
    useEffect(()=>{
        const API = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(API)
        .then(response => response.json())
        .then(data => setDetailsOfFriend(data))
    },[])
    console.log(detailsOfFriend);
    const {name,email,phone,website,address,company} = detailsOfFriend;
    return (
        <div>
            {/* <h3>Here are my friends details</h3> */}
            <h4>id={friendId}</h4>        
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            {/* <p>Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</p> */}
            {/* <p>Company: {company.name}</p> */}
        </div>
    );
};

export default FriendDetail;