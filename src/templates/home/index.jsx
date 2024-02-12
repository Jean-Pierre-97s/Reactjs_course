import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/posts';
import { Button } from '../../components/button';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 10
  }
  
  componentDidMount() {
    this.loadPosts()
  }
  
  loadPosts = async () => {
    const { page, postPerPage } = this.state
    const postsAndPhotos = await loadPosts()
    this.setState({ 
      posts: postsAndPhotos.slice(page, postPerPage),
      allPosts: postsAndPhotos
    })
  }
  
  loadMorePosts = () => {
    const {page, postPerPage, allPosts, posts} = this.state

    const nextPage = page + postPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage)

    posts.push(...nextPosts)
    this.setState({ 
      posts,
      page: nextPage
    })
  }

  render() {
    const {posts, page, postPerPage, allPosts} = this.state
    const noMorePosts = page + postPerPage >= allPosts.length
    return (
      <section className='container'>
        <Posts posts = {posts}/>
        <div className='button-container'>
          <Button 
          text="Load more posts"
          onClick={this.loadMorePosts}
          disabled={noMorePosts}/>
        </div>
      </section>
    );
  }
}
    
export default Home;
    