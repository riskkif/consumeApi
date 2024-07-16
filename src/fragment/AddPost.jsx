import Input from "../components/Elements/Input/input"
import Button from "../components/Elements/Button"
import { useState } from "react";


const AddPost = ({posts, setPosts}) => {
        const [newTitle, setNewTitle] = useState("");
        const [newBody, setNewBody] = useState("");
        const title = newTitle.trim();
        const body = newBody.trim();
        const handleClick = () => {
            if (title && body) {
                fetch('https://jsonplaceholder.typicode.com/posts', {
                  method: 'POST',
                  body: JSON.stringify({
                    title,
                    body,
                    userId: 1,
                  }),
                  headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
                })
                  .then((response) => response.json())
                  .then((json) => {
                    setPosts([...posts, json]);
                    setNewTitle("");
                    setNewBody("");
                    alert('Data berhasil ditambahkan');
                  })
                  .catch((error) => console.error('Error adding post:', error));
              }
        }
       
      
    return(
    <div className="mb-3">
        <Input value={newTitle} 
        onChange={(e) => 
        setNewTitle(e.target.value)} 
        type="text" 
        placeholder="Title" 
        margin="mb-3"
        />
        <Input
        value={newBody} 
        onChange={(e) => 
            setNewBody(e.target.value)} 
            type="text" 
            placeholder="Body" 
            margin="mb-3"
            />
        <Button variant="btn-primary" onClick={handleClick}>Add</Button>
            </div>
    )
}

export default AddPost