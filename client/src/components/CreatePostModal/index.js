import React from 'react';
import { Modal, TextareaAutosize, Button, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { modalState$ } from '../../redux/selectors';
import useStyles from './styles';
import { createPost, hideModal } from '../../redux/actions';
import FileBase64 from 'react-file-base64';

import h1 from '../../assets/h1.jpg';
import h2 from '../../assets/h2.png';
import h3 from '../../assets/h3.jpg';
import h5 from '../../assets/h5.png';
import h6 from '../../assets/h6.png';
import h7 from '../../assets/h7.png';
import h8 from '../../assets/h8.png';
import h4 from '../../assets/h9.png';
import h0 from '../../assets/h10.png';

export default function CreatePostModal(){
    const { isShow } = useSelector(modalState$);
    console.log({isShow});

    const classes = useStyles();

    const [data, setData] = React.useState({
        title: "",
        content:"",
        attachment:""
    });

    const dispatch = useDispatch();
    const onClose = React.useCallback(() => {
        dispatch(hideModal());
        setData({
            title: "",
            content:"",
            attachment:""
        })
    }, [dispatch]);

    const onSubmit = React.useCallback(() => {
        dispatch(createPost.createPostRequest(data))
    }, [data, dispatch]);

    let randomImage = 'h' + Math.floor(Math.random() * 9);
    if (randomImage =='h0') {
        randomImage = h0
    }
    else if (randomImage =='h2') {
        randomImage = h2
    }
    else if (randomImage =='h3') {
        randomImage = h3
    }
    else if (randomImage =='h4') {
        randomImage = h4
    }
    else if (randomImage =='h5') {
        randomImage = h5
    }
    else if (randomImage =='h6') {
        randomImage = h6
    }
    else if (randomImage =='h7') {
        randomImage = h7
    }
    else if (randomImage =='h8') {
        randomImage = h8
    }

    console.log(randomImage);

    const body = (
        <div className={classes.paper} id="simple-modal-title">
            <img src={randomImage} className={classes.image}/>
            <h2>Viết một lá thư...</h2>
            <form noValidate autoComplete='off' className={classes.form}>
                <TextField 
                    className={classes.title} 
                    required 
                    label='Tiêu đề' 
                    value={data.title}
                    onChange={(e) => setData({...data, title: e.target.value})}
                />
                <TextareaAutosize 
                    rowsMin={10}
                    rowsMax={15}
                    placeholder='Để làn gió cuốn đi...'
                    value={data.content}
                    onChange={(e) => setData({...data, content: e.target.value})}
                />
                <FileBase64 
                    accept="image/*"
                    multiple={false}
                    type="file"
                    value={data.attachment}
                    onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
                />

                <Button
                    className="classes.button" 
                    
                    color='primary' 
                    component='span' 
                    fullWidth
                    onClick={onSubmit}
                    >
                    ...gửi vào trong khu vườn
                </Button>
            </form>
        </div>
    );
    return (
        <div>
            <Modal open={isShow} onClose={onClose}>
                {body}
            </Modal>
        </div>   
    )
}