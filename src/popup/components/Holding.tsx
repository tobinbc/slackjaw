import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React, { Fragment, FunctionComponent } from 'react';

const Holding: FunctionComponent = props => {



  return (
    <Fragment>

      <CardContent>
        <Typography gutterBottom variant="h4">
          Slackjaw
          </Typography>
        <Typography variant="body1">
          There's an error :()
          </Typography>
      </CardContent>
      <CardActions>

        <Button color="primary" onClick={() => {
        }}>
          Reset
        </Button>
      </CardActions>
    </Fragment>
  );
};

export { Holding };
