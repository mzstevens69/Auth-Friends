import React, {useState} from 'react'

export const EditFriend = ({friend, deleteFriend, friendEdit }) => {
    const [editFriend, setEditFriend] = useState(friend)
    const [edit, setEdit] = useState(false)
    
    const handleChanges = e => {
        setEditFriend({...editFriend,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        setEdit(false)
        friendEdit(editFriend)
    }
    const handleDelete = () => {
        deleteFriend(friend)
    }
    const handleEdit = () => {
        setEdit(true)
    }

    return (
        <div>
            <h1>{friend.name} </h1>
            <span>{friend.age} </span>
            <span>{friend.email} </span>
        
        <button onClick={handleDelete} >X Delete</button>
        <button onClick={handleEdit} >Edit</button>

        {edit && <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='name'
                onChange={handleChanges}
                value={editFriend.name}
                placeholder='Name'
                />
                <input
                type='number'
                name='age'
                onChange={handleChanges}
                value={editFriend.age}
                placeholder='Name'
                />
                <input
                type='email'
                name='email'
                onChange={handleChanges}
                value={editFriend.email}
                placeholder='Email'
                />
                <button type='submit' >Submit</button>
    </form>} 
        
    
        </div>
    )

}