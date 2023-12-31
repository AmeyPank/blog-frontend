import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function CreateEditBlog({ pageTitle, btnText }) {
    const [title, setTitle] = useState();
    const [textBody, setTextBody] = useState();
    const userData = JSON.parse(localStorage.getItem("user"));
    const apiUrl = process.env.REACT_APP_API_URL; // Update the variable name

    const handleSubmit = (e) => {
        e.preventDefault();
        const blogObj = {
            title,
            textBody,
        };
        if (pageTitle === "Create Blog") {
            axios
                .post(
                    `https://blog-app-backend-3o3o.onrender.com/blog/createBlog/${userData.userId}`,
                    blogObj
                )
                .then((res) => {
                    alert("Blog created successfully!");
                    window.location.href = "/myblogs";
                })
                .catch((err) => {
                    alert(err);
                });
        } else {
            axios
                .put(`https://blog-app-backend-3o3o.onrender.com/blog/editBlog/${userData.userId}`, blogObj)
                .then((res) => {
                    alert("Blog edited successfully!");
                    window.location.href = "/myblogs";
                })
                .catch((err) => {
                    alert(err);
                });


        }
    };
    return (
        <div>
            <Header />
            <Form className="register_form" onSubmit={handleSubmit}>
                <h1 className="mb-5">{pageTitle}</h1>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="textBody">
                    <Form.Label>Text Body</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={6}
                        placeholder="Enter text body"
                        onChange={(e) => setTextBody(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit">{btnText}</Button>
            </Form>

            <Footer />
        </div>
    );
}

export default CreateEditBlog;