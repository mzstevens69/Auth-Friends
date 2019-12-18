import  React, {useState} from 'react'

const AddFriend = props=> {
    const [newFriend, setNewFriend] = useState({
        
        name: '',
        age: '',
        email: ''
    })
    const handleChanges  = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.addFriend(newFriend)
        setNewFriend({
            name: '',
            age: '',
            email: ''
        })
       
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    name='name'
                    onChange={handleChanges}
                    value={newFriend.name}
                    placeholder='Name'
                    />
                    <br/>
                    <input 
                    name='age'
                    onChange={handleChanges}
                    value={newFriend.age}
                    placeholder='Age'
                    />
                    <br/>
                    <input 
                    name='email'
                    onChange={handleChanges}
                    value={newFriend.email}
                    placeholder='Email'
                    />
                    <br/>
                <button type='submit' >Add Another Friend</button>
            </form>

        </div>
    )
}
export default AddFriend