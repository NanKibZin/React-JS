import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [member, setMember] = useState([]);
  function remove(id) {
    // const filter = member.map((m) => m.id !== id);
    const filterMember = member.filter((m) => m.id !== id);
    setMember(filterMember);
    // setMember(filter);
  }
  function handleSubmite(e) {
    e.preventDefault();
    if (!name || !email) {
      alert("input form");
    } else {
      const id = Date.now();
      const Member = { id, name, email };
      const addMember = [...member, Member];
      setMember(addMember);
      setEmail("");
      setName("");
      // console.log(name, gmail);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmite}>
        <div>
          <label htmlFor="name">Input Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Input gmail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submite" onClick={handleSubmite}>
          click
        </button>
      </form>
      <ul>
        {member.map((m) => (
          <li key={m.id}>
            <h5>{m.name}</h5>
            <h2>{m.email}</h2>
            <button onClick={() => remove(m.id)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
