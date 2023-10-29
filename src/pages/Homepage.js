import axios from "axios";
import React, { useEffect, useState } from "react";

import BlogCard from "../components/Blogs/BlogCard";
import "../App.css";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer";

function Homepage() {
    const apiUrl = process.env.REACT_APP_API_URL; // Update the variable name

    const [blogs, setBlogs] = useState();
    const userData = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        axios
            .get(`https://blog-app-backend-3o3o.onrender.com/blog/homeblogs/${userData.userId}`)
            .then((res) => {
                setBlogs(res.data.data);
            })
            .catch((err) => {
                alert(err);
            });
    }, [userData.userId]);

    return (
        <div>
            <Header />
            {blogs ? blogs.map((blog) => <BlogCard props={blog} />) : <></>}
            <Footer />

        </div>
    );
}

export default Homepage;