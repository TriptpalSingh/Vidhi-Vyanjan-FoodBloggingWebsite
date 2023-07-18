import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';
import './blogs.css';
import axios from 'axios';
import Blog from '../blog/Blog';
import userContextImport from '../../context/user/userContext';
import loginContext from '../../context/login/loginContext';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const userContext = useContext(userContextImport);

    useEffect(() => {
        axios.get("http://localhost:5000/api/blogs/showAllBlogs").then((res) => {
            // console.log(blogs)
            setBlogs(res.data);
            // console.log(blogs);
        })
    }, [])

    const navActive = ({ isActive }) => {
        return {
            color: isActive ? "#f43f5e" : null,
        };
    };

    return (
        <>
            <div className='blogs__header '>
                <div className="navbar flex justify-between items-center container mx-auto py-8 flex-col lg:flex-row gap-5 lg:gap-0">

                    <ul className="menu flex gap-5">
                        <li>
                            <NavLink
                                style={navActive}
                                end
                                to="/Blogs"
                                className="text-gray-400 hover:text-gray-600 duration-300"

                            >
                                All Blogs
                            </NavLink>
                        </li>

                        {loginContext.loggedIn ? (
                            <li>
                                <NavLink
                                    style={navActive}
                                    end
                                    to="/UserBlogs"
                                    className="text-gray-400 hover:text-gray-600 duration-300"

                                >
                                    {userContext.user.name}'s Blogs
                                </NavLink>
                            </li>
                        ) : (
                                < li >
                            <NavLink
                                style={navActive}
                                end
                                to="/UserBlogs"
                                className="text-gray-400 hover:text-gray-600 duration-300"

                            >
                                Your Blogs
                            </NavLink>
                            </li>
                        )}

                    <li>
                        <NavLink
                            style={navActive}
                            end
                            to="/addBlog"
                            className="text-gray-400 hover:text-gray-600 duration-300"

                        >
                            Add Blog
                        </NavLink>
                    </li>


                </ul>
            </div>
        </div >
            <div className='blogs__outer'>
                {
                    blogs.map((blog) => <Blog title={blog.title} author={blog.author} desc={blog.desc} date={blog.date} imgUrl={blog.imgUrl} id={blog._id} />)
                }
            </div>

        </>
    )
}

export default Blogs