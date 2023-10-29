import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function UserCard({ props }) {
    const userData = JSON.parse(localStorage.getItem("user"));
    const apiUrl = process.env.REACT_APP_API_URL; // Update the variable name

    const handleFollow = (followingUserId) => {
        const followObj = { followingUserId };
        axios
            .post(
                `https://blog-app-backend-3o3o.onrender.com/follow/followUser/${userData.userId}`,
                followObj
            )
            .then((res) => alert("Successfully followed!"))
            .catch((err) => alert(err));
    };

    return (
        <Card style={{ width: "18rem" }} className="m-2">
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.username}</Card.Text>
                <Card.Text>{props.email}</Card.Text>
                <Button variant="primary" onClick={() => handleFollow(props._id)}>
                    Follow
                </Button>
            </Card.Body>
        </Card>
    );
}

export default UserCard;