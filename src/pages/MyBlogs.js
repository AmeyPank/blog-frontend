import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "../components/Blogs/BlogCard";
import Header from "../components/Header/Header.js";

function MyBlogs() {
    // const [page, setPage] = useState(1);
    const [myBlogs, setMyBlogs] = useState();
    const userData = JSON.parse(localStorage.getItem("user"));
    const apiUrl = process.env.REACT_APP_API_URL; // Update the variable name

    useEffect(() => {
        console.log(userData.userId);
        axios
            .get(`https://blog-app-backend-3o3o.onrender.com/blog/getUserBlogs/${userData.userId}`)
            .then((res) => {
                setMyBlogs(res.data.data);
            });
    }, [userData.userId]);

    return (
        <>
            <Header />
            <h1 className="m-5">My Blogs</h1>
            {myBlogs ? myBlogs.map((blog) => <BlogCard props={blog} />) : <></>}
        </>
    );
}

export default MyBlogs;