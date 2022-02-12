import { makeStyles } from '@material-ui/core';
import '../Header/style.css';

export default makeStyles((theme) => ({
    paper: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        position: 'absolute',
        width: '90%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        fontFamily: 'Texturina, serif'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        margin: '0 0 10px 0'
    },
    title: {
        marginBottom: '10px'
    },
    button: {
        fontFamily: 'Texturina, serif',
        backgroundColor: "#f8cbe7",
    },
     image: {
        position: 'fixed',
        top: theme.spacing(5),
        right: theme.spacing(5),
        width: 180,
        opacity:"100%"
    },
}));