import React, { useState, useEffect } from 'react'
import { EditFriend} from './EditFriend'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import AddFriend from './AddFriend'

export const Dash = () => {
    const [friends, setFriends] = useState([])
    
    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then(res => setFriends(res.data))
        .catch(err => console.log(err.res))

    })

    const friendEdit = friend => {
        axiosWithAuth()
        .put(`/friends/${friend.id}`, friend)
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    const addFriend = newFriend => {
        axiosWithAuth()
        .post('/friends', newFriend )
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    const deleteFriend = friend => {
        axiosWithAuth()
        .delete(`/friends/${friend.id}`)
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <AddFriend addFriend={addFriend}/>
        {friends.map(friend => (
                <EditFriend
                    key={friend.id}
                    friend={friend}
                    friendEdit={friendEdit}
                    deleteFriend={deleteFriend}
                    />                    
                    
            ))}
                
        </div>
    )
}