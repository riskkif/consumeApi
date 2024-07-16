import Button from "../components/Elements/Button";

const DeletePost = ({id, posts, setPosts}) => {
    const deletePost = id => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: "DELETE",
        })
          .then(response => response.json())
          .then(() => {
            setPosts(values => {
              return values.filter(post => post.id !== id)
            })
            alert('Data deleted successfully');
        })
      }
    return(
        <td>
                <Button variant="btn-danger" onClick={() => deletePost(post.id)}>
                    Delete
                </Button>
              </td>
    )
}

export default DeletePost