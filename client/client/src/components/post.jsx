function post({ details, deletePost }) {
    const currUser = JSON.parse(localStorage.getItem("currUser"));
   
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