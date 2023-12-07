function post({ details }) {
    const currUser = JSON.parse(localStorage.getItem("currUser"));
    function deletePost() {
        fetch("http://localhost:3000/post", {
            method: "DELETE", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(details)
        }).then((result) => { 
            if (result.status == 200) { 
                alert("deleted successfully"); 
                return;
            } 
            else{
                alert("something went wrong:(")
                return;
            }
        })
    }
    function showComments() {
        console.log("here");
    }
    
    return (
        <div style={{borderLeft: "6px solid #116A7B", backgroundColor:"#ECE5C7",marginBottom:"1rem"}} onClick={showComments}>
            <br/>
            {currUser[0]["id"] == details.user_id && <button onClick={deletePost}>delete</button>}
            <h3>{details.title}</h3>
            <h4>{details.body}</h4>
            <br/>
        </div>
    );
}

export default post;