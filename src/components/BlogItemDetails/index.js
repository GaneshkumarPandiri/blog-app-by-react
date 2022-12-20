import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogDetailedItem: {}}

  componentDidMount() {
    this.getBlogDetailedItem()
  }

  getBlogDetailedItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const responseObject = await response.json()

    const convertToCamelCaseObject = {
      id: responseObject.id,
      title: responseObject.title,
      imageUrl: responseObject.image_url,
      avatarUrl: responseObject.avatar_url,
      author: responseObject.author,
      content: responseObject.content,
    }
    this.setState({
      blogDetailedItem: convertToCamelCaseObject,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, blogDetailedItem} = this.state
    const {title, imageUrl, avatarUrl, content, author} = blogDetailedItem

    return (
      <div>
        {isLoading ? (
          <div testId="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-details">
            <h1 className="blog-title">{title}</h1>
            <div className="author">
              <img className="avatar-style" src={avatarUrl} alt={author} />
              <p className="details-author-name">{author}</p>
            </div>
            <img className="image-style-detailed" src={imageUrl} alt={title} />
            <p>{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
