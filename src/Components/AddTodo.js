import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const [desc, setDesc] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!title || !desc) {
      alert("Title & Description cannot be empty...!");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  }

  // This will not work in 2023=-------------------
  // <form onSubmit={handleSubmit}></form>;

  // const submit = (e) => {
  //   e.precentDefault();
  //   if (!title || !desc) {
  //     alert("Title & Description cannot be empty...!");
  //   }
  //   addTodo(title, desc);
  //   // return false;
  // };

  return (
    <div className="container my-3 ">
      <h3 className="text-center">Add a Todo!</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Desciption
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
