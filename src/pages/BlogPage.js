import React, { useEffect, useState } from 'react'
import { ReactComponent as LeftArrow } from '../assets/arrow-left.svg'

const BlogPage = ({match, history}) => {

    let blogId = match.params.id
    let [blog, setBlog] = useState(null)

    useEffect(() => {
        getBlog()
    }, [blogId])

    let getBlog = async () => {
        if(blogId === 'new') return

        let response = await fetch(`/api/blogs/${blogId}`)
        let data = await response.json()
        setBlog(data)
    }
    

    let createBlog = async () => {
        fetch('api/blogs/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
    }

    let deleteBlog = async () => {
        fetch(`api/blogs/${blogId}/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        history.push('/')

    let handleSubmit = () => {
        if (blogId !== 'new' && blog.body === '') {
            deleteBlog()
        } else if (blogId === 'new' && blog.body !== null) {
            createBlog()
        }
        history.push('/')
    }

  return (
    <div className="blog" >
            <div className="blog-header">
                <h3><LeftArrow onClick={handleSubmit}/></h3>
                {blogId !== 'new' ? (
                    <button onClick={deleteBlog}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Submit</button>
                )}
            </div>
        </div>
  )

    }
}

export default BlogPage