import React, { useEffect } from 'react'
import {fetchPost }from '../actions'
import {connect} from 'react-redux'
const PostList = ({fetchPost,posts}) => {
    console.log(posts)
    useEffect(()=>{
        fetchPost()
    },[])
    return (
        <div>
           {posts.map(post=>(
               <>
               <h1>{post.id}</h1>
               <h1>{post.title}</h1>
               <hr/>
               </>
           ))}
        </div>
    )
}
const mapStateToProps=state=>{
    return {posts:state.posts}
}
export default connect(mapStateToProps,{fetchPost}) (PostList)
