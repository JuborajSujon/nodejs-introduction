import "./App.css";

function App() {
  const handleAddUser = async (event) => {
    try {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const formUser = { name, email };
      const url = "http://localhost:5000/users";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formUser),
      });
      const data = await response.json();
      if (data.acknowledged) {
        alert("User added successfully");
      }
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default App;
