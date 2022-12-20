import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.fetchingBlogList()
  }

  fetchingBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const responseObject = await response.json()

    const convertToCamelCaseObject = responseObject.map(item => ({
      id: item.id,
      title: item.title,
      imageUrl: item.image_url,
      avatarUrl: item.avatar_url,
      author: item.author,
      topic: item.topic,
    }))
    this.setState({blogList: convertToCamelCaseObject, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testId="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {blogList.map(blogItem => (
              <BlogItem blogItem={blogItem} key={blogItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BlogList
