import React from 'react';


export const FriendCard = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <span>Age: {props.age} </span>
            <span>Email: {props.email} </span>
        </div>
        
    )
}