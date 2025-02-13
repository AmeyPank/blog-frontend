import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { StyledButton, StyledCard, StyledCardText, StyledCardTitle } from "./BlogCard.styles";

function BlogCard({ props }) {
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState(props.title); // ✅ Prefill title
    const [textBody, setTextBody] = useState(props.textBody); // ✅ Prefill textBody
    const userData = JSON.parse(localStorage.getItem("user"));

    const handleDelete = () => {
        axios
            .delete(`https://blog-app-backend-3o3o.onrender.com/blog/deleteBlog/${props._id}`)
            .then(() => {
                window.location.reload();
            })
            .catch((err) => {
                alert(err);
            });
    };

    const handleSubmit = (blogId) => {
        const blogObj = { blogId, title, textBody };

        axios
            .put(`https://blog-app-backend-3o3o.onrender.com/blog/editBlog/${userData.userId}`, blogObj)
            .then(() => {
                alert("Blog edited successfully!");
                window.location.href = "/myblogs";
            })
            .catch((err) => {
                alert(err);
            });
    };

    // ✅ Handle cancel edit
    const handleCancelEdit = () => {
        setTitle(props.title); // Reset title
        setTextBody(props.textBody); // Reset text body
        setIsEdit(false); // Close edit mode
    };

    return (
        <StyledCard>
            <Card.Body>
                <StyledCardTitle>{props.title}</StyledCardTitle>
                <StyledCardText>{props.textBody}</StyledCardText>

                <div className="d-flex justify-content-between mt-3">
                    <StyledButton
                        variant="outline-success"
                        onClick={() => {
                            setIsEdit(true);
                            setTitle(props.title); // ✅ Reset title when opening edit mode
                            setTextBody(props.textBody); // ✅ Reset text body when opening edit mode
                        }}
                    >
                        ✏️ Edit
                    </StyledButton>
                    <StyledButton variant="outline-danger" onClick={handleDelete}>
                        🗑️ Delete
                    </StyledButton>
                </div>

                {isEdit && (
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit(props._id);
                        }}
                        className="mt-4"
                    >
                        <Form.Group controlId="title">
                            <Form.Label className="fw-semibold">Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Title"
                                value={title} // ✅ Prefilled value
                                onChange={(e) => setTitle(e.target.value)}
                                className="rounded"
                            />
                        </Form.Group>

                        <Form.Group controlId="textBody" className="mt-3">
                            <Form.Label className="fw-semibold">Text Body</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Enter text body"
                                value={textBody} // ✅ Prefilled value
                                onChange={(e) => setTextBody(e.target.value)}
                                className="rounded"
                            />
                        </Form.Group>

                        <div className="d-flex justify-content-end mt-3">
                            <StyledButton type="submit" variant="primary">
                                💾 Save Changes
                            </StyledButton>
                            <StyledButton type="button" variant="secondary" onClick={handleCancelEdit} className="ms-2">
                                ❌ Cancel
                            </StyledButton>
                        </div>
                    </Form>
                )}
            </Card.Body>
        </StyledCard>
    );
}

export default BlogCard;
