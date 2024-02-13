import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/posts';
import { Button } from '../../components/button';
import { TextInput } from '../../components/textInput';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 9,
    searchValue: ''
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

  handleChange = (e) => {
    const {value} = e.target
    this.setState({ searchValue: value })
  }

  render() {
    const {posts, page, postPerPage, allPosts, searchValue} = this.state
    const noMorePosts = page + postPerPage >= allPosts.length

    const filteredPosts = !!searchValue ? 
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase())
    })
    : 
    posts

    return (
      <section className='container'>
        <div className='search-container'>
          {!!searchValue && ( <h1>Search value:</h1> )}

          <TextInput searchValue={searchValue} handleChange={this.handleChange}/>
        </div>
        {filteredPosts.length > 0 && (
          <Posts posts = {filteredPosts}/>
        )}

        {filteredPosts.length === 0 && (
          <p>Não existem posts com o titulo "{searchValue}"</p>
        )}

        <div className='button-container'>
        {!searchValue && (
          <Button 
          text="Load more posts"
          onClick={this.loadMorePosts}
          disabled={noMorePosts}/>
        )}
          
        </div>
      </section>
    );
  }
}
    
export default Home;
    