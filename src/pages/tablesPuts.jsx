import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert} from "bootstrap";
import Button from '../components/Elements/Button';
import axios from "axios";
import Input from "../components/Elements/Input/input";
import AddPost from "../fragment/AddPost";

const TablePuts = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
  };

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
  };

  const updatePost = () => {
    const { id, title, body } = selectedPost;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({id: 1, title, body, userId: 1 }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(response => response.json())
      .then((updatedPost) => {
        setPosts(posts.map(post => (post.id === id ? updatedPost : post)));
        alert('Post updated successfully!');
        closeModal();
      })
      .catch((error) => console.error('Error updating post:', error));
  };

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


  return (
    <div className="container">
      <h1>Posts</h1>
      <AddPost posts={posts} setPosts={setPosts}/>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post.id}>
              <td>{index + 1}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <Button variant="btn-primary" onClick={() => openModal(post)}>
                    Update
                </Button>
                &nbsp;
              </td>
              <td>
                <Button variant="btn-danger" onClick={() => deletePost(post.id)}>
                    Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedPost && (
        <div className="modal show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Post</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedPost.title}
                    onChange={(e) => setSelectedPost({ ...selectedPost, title: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Body</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedPost.body}
                    onChange={(e) => setSelectedPost({ ...selectedPost, body: e.target.value })}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <Button variant="btn-secondary" onClick={closeModal}>Close</Button>
                <Button variant="btn-primary" onClick={updatePost}>Update</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TablePuts;
