import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <>
        <h1>Blog</h1>
        <Link to="/blog/blog-details">Blog Details</Link>
    </>
  )
}

export default Blog