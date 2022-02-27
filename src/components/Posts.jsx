import React, { useEffect } from 'react'
import PostItem from './PostItem'
import PropTypes from 'prop-types'
/////////////////////////////////////////////////////////////////////////////
import { useSelector, useDispatch } from 'react-redux'
import { fetchPostsAsync, selectPosts } from '../features/poster/posterSlice'


// const Posts = ({ posts }) => {
//
//     let postItems
//     if (!posts || posts.length === 0) {
//         postItems = <h3>No Posts</h3>
//     } else {
//         postItems = posts.map((post, idx) => 
//             <PostItem key={ idx } post={ post } />
//         )
//     }
//
//     return (
//         <div>
//             <h2>Latest Posts</h2>
//             <ul>
//                 { postItems }
//             </ul>
//         </div>
//     )
// }
//
// Posts.propTypes = {
//     posts: PropTypes.array.isRequired
// }
/////////////////////////////////////////////////////
/**
 * Redux Toolkit
 */
const Posts = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchPostsAsync())
    }, [])

    const posts = useSelector(selectPosts)
    
    let postItems
    if (!posts || posts.length === 0) {
        postItems = <h3>No Posts</h3>
    } else {
        postItems = posts.map((post, idx) => 
            <PostItem key={ idx } post={ post } />
        )
    }

    return (
        <div>
            <h2>Latest Posts</h2>
            <ul>
                { postItems }
            </ul>
        </div>
    )
}


export default Posts