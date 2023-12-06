import { useState, useEffect } from "react";

function Info() {
  const [currUser, setCurrUser] = useState(JSON.parse(localStorage.getItem("currUser")) || []);
  const [editUser, setEditUser] = useState({ ...currUser[0] });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currUser")) || [];
    setCurrUser(storedUser);
    setEditUser({ ...storedUser[0] });
  }, []);

  const handleChange = (e, key) => {
    const { value } = e.target;
    setEditUser((prev) => ({ ...prev, [key]: value }));
  };

  const handleEdit = async () => {
    try {
      console.log("editUser: ", editUser);
      localStorage.setItem("currUser", JSON.stringify([editUser]));

      setCurrUser([editUser]); // Update currUser as an array
      const response = await fetch('http://localhost:3000/info', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: editUser.id,
          phone: editUser.phone,
          email: editUser.email,
          name: editUser.name,
        }),
      });

      console.log("response: ", response);

      if (!response.ok) {
        throw new Error(`Failed to update user: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <p>
        <strong>User Information:</strong>
        <label>
          <strong>name:</strong> {currUser[0]?.name}
          <input
            type="text"
            value={editUser.name || ""}
            onChange={(e) => handleChange(e, "name")}
          />
        </label>
        <br />
        <label>
          <strong>Email:</strong> {currUser[0]?.email}
          <input
            type="text"
            value={editUser.email || ""}
            onChange={(e) => handleChange(e, "email")}
          />
        </label>
        <br />
        <label>
          <strong>Phone:</strong> {currUser[0]?.phone}
          <input
            type="text"
            value={editUser.phone || ""}
            onChange={(e) => handleChange(e, "phone")}
          />
        </label>
      </p>
      <button onClick={handleEdit}>Save Changes</button>
    </div>
  );
}

export default Info;
