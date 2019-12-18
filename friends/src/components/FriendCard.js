import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom: 12,
    marginLeft: 12,
    boxShadow: '2px 3px 12px rgba(0, 0, 0, 1)',
    background: 'skyblue',
    color: 'midnightBlue'
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});


export const FriendCard = props => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color='primary' gutterBottom>                   
                    {props.name}
                </Typography>
                <Typography variant="h5" component="h2">
                    Email: {props.email}
                </Typography>
                <Typography variant="body2" component="p">
                    Age: {props.age}
                </Typography>
            </CardContent>
            <CardActions>
                <Button color='white' size="small">Learn More</Button>
            </CardActions>           
        </Card>  
    )
}