import React from 'react';
import { Avatar, 
    Card, 
    CardActions, 
    CardContent, 
    CardHeader, 
    CardMedia, 
    IconButton, 
    Typography 
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import { updatePost } from '../../../redux/actions';

export default function Post({post}){
    const classes = useStyles();

    const dispatch = useDispatch();
    const onLikeBtnClick = React.useCallback(() => {
        dispatch(updatePost.updatePostRequest({...post, likeCount : post.likeCount + 1}));
    }, [dispatch, post]);

    return (
        <Card>
            <CardHeader avatar={<Avatar>CB</Avatar>}
                title='Một lá thư trong vườn ...'
                subheader={moment(post.updatedAt).format('HH:MM MMM DD, YYYY')}
                
            />
            <CardMedia image={post.attachment} title="Title" className={classes.media} />
            <CardContent>
                <Typography variant="h5" color="textPrimary" className="classes.title">{post.title}</Typography>
                <Typography witdh="100%" variant="body2" paragraph color="textSecondary" className="classes.content">
                    {post.content}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={onLikeBtnClick} >
                    <FavoriteIcon />
                    <Typography component="span" color="textSecondary">
                        {post.likeCount}
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>
    )
}