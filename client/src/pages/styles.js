import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    },

    image: {
        position: 'fixed',
        top: theme.spacing(1),
        right: theme.spacing(1),
        width: 80,
        opacity:"50%"
    },
    container: {
        backgroundColor: "#b1bae8"
    }
}));