import React from 'react'
import { Link } from 'react-router-dom'

let getTime = (blog) => {
    return new Date(blog.updated).toLocaleDateString
}

let getTitle = (blog) => {
    let title = blog.body.split('\n')[0]
    if (title.length > 45) {
        return title.slice(0, 45)
    }
    return title
}

let getBody = (blog) => {
    let title = getTitle(blog)
    let body =  blog.body.replaceAll('\n', ' ')
    body = body.replaceAll(title, '')

    if (body.lenght > 45) {
        return body.slice(0, 45) + '...'
    } else {
        return body
    }
}

const ListItem = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}`}>
        <div className = 'blogs-list-item'>
            <h3>{getTitle(blog)}</h3>
            <p><span>{getTime(blog)}</span>{getBody(blog)}</p>
        </div>
    </Link>
  )
}

export default ListItem