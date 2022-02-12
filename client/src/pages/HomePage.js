import React from 'react';
import { Container, Fab } from '@material-ui/core'; //UI
import AddIcon from '@material-ui/icons/Add';
import Header from '../components/Header';
import PostList from '../components/PostList';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/actions';
import CreatePostModal from '../components/CreatePostModal';

import h4 from '../assets/h4.png';

export default function HomePage() {

    const classes = useStyles();
    const dispatch = useDispatch();

    const openCreatePostModal = React.useCallback(() => {
        dispatch(showModal());
    }, [dispatch]);

    return (
        
        <Container maxWidth="lg" className={classes.container}>
            <Header />
            <img src={h4} className={classes.image}/>
            <PostList />
            <CreatePostModal />
            <Fab 
                color='primary' 
                className={classes.fab} 
                onClick={openCreatePostModal}>
                <AddIcon />
            </Fab>
        </Container>
    )
}

