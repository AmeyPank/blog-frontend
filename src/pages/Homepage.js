import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "../components/Blogs/BlogCard";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer";
import "../App.css";

function Homepage() {
    const apiUrl = process.env.REACT_APP_API_URL; // Update the variable name
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const userData = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(
                    `https://blog-app-backend-3o3o.onrender.com/blog/homeblogs/${userData.userId}`
                );
                setBlogs(response.data.data);
            } catch (err) {
                setError("Failed to fetch blogs. Please try again later.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [userData.userId]);

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading blogs...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="homepage-container">
            <Header />
            <div className="blogs-container">
                {blogs.length > 0 ? (
                    blogs.map((blog) => <BlogCard key={blog._id} props={blog} />)
                ) : (
                    <p className="no-blogs-message">No blogs found. Start creating your own!</p>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;