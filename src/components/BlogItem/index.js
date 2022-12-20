import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class BlogItem extends Component {
  render() {
    const {blogItem} = this.props
    const {id, title, imageUrl, avatarUrl, topic, author} = blogItem
    return (
      <Link to={`blogs/${id}`} className="blog-item-container">
        <img src={imageUrl} alt={title} className="image-style" />
        <div className="blog-sub-item-container">
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="author">
            <img src={avatarUrl} alt={author} className="avatar-style" />
            <p>{author}</p>
          </div>
        </div>
      </Link>
    )
  }
}

export default BlogItem
