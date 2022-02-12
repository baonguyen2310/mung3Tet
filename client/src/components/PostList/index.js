import React from 'react';
import  { Grid } from '@material-ui/core';
import Post  from './Post';
import * as actions from '../../redux/actions';

import { useDispatch, useSelector } from 'react-redux';
import { postsState$ } from '../../redux/selectors';
import moment from 'moment';

export default function PostList (){

    const dispatch = useDispatch();
    const posts = useSelector(postsState$);

    console.log('[postlist - posts]', posts);
    
    React.useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest());
    }, [dispatch]);

    let randomPost = Math.floor(Math.random()*10)
    return (
        <Grid container spacing={2} alignItems='stretch'>
            <Grid item xs={12} sm={6}>
                {posts.filter(post => posts.indexOf(post) % 5 == randomPost).map(post => <Post key={post._id} post={post}/>)}
            </Grid>
            
        </Grid>
    )
}