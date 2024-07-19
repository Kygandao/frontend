import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'


const BlogsListPage = () => {

    let [blogs, setBlogs] = useState([])

    useEffect(() => {
        getBlogs()
    }, [])


    let getBlogs = async () => {

        let response = await fetch('/api/blogs/')
        let data = await response.json()
        setBlogs(data)
    }

    return (
        <div className="blogs">
            <div className="blogs-header">
                <h2 className="blogs-title">&#9782; Blogs</h2>
                <p className="blogs-count">{blogs.length}</p>
            </div>

            <div className="blogs-list">
                {blogs.map((blog, index) => (
                    <ListItem key={index} blog={blog} />
                ))}
            </div>
            <AddButton />
        </div>
    )
}

export default BlogsListPage