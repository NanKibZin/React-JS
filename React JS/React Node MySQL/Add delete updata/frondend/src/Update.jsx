import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update= () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const {id}=useParams()
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put("http://localhost:8081/update/"+id, {id, name, email })
      .then((res) => {
        console.log(res);
        console.log("sucess")
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Update Student</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Input name"
              className="form-control"
              onChange={e=>setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Input Email"
              className="form-control"
             onChange={e=>setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-danger">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
