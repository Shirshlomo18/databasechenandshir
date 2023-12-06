import { useState, useEffect, useContext } from "react";
function Info(){

    const handleChange = (e, key) => {
        const { value } = e.target;
        setEditUser((prev) => ({ ...prev, [key]: value }));
      };
      const handleEdit = async () => {
        try {
          console.log("editUser: ", editUser);
          localStorage.setItem("currUser", JSON.stringify(editUser));
    
          setCurrUser(editUser);
          const response = await fetch(url, {
            method: "PUT",
            headers: {
              // Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
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
          // Handle successful response, if needed
          console.log(data);
        } catch (error) {
          console.error("Error updating user:", error);
        }
      };
 return (
        <>
          <div>
            <p>
              <strong>User Information:</strong>
              <label>
                <strong>Name:</strong> {currUser.name}
                <input
                  type="text"
                  value={editUser.name}
                  onChange={(e) => handleChange(e, "name")}
                />
              </label>
              <br />
              <label>
                <strong>Username:</strong> {currUser.username}
                <input
                  type="text"
                  value={editUser.username}
                  onChange={(e) => handleChange(e, "username")}
                />
              </label>
              <br />
              <label>
                <strong>Email:</strong> {currUser.email}
                <input
                  type="text"
                  value={editUser.email}
                  onChange={(e) => handleChange(e, "email")}
                />
              </label>
              <br />
    
              <label>
                <strong>Phone:</strong> {currUser.phone}
                <input
                  type="text"
                  value={editUser.phone}
                  onChange={(e) => handleChange(e, "phone")}
                />
              </label>
            </p>
            <button onClick={handleEdit}>Save Changes</button>
          </div>
        </>
      );
    }
    export default Info;