import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React, { Fragment, FunctionComponent, useEffect } from 'react';
import { CircularProgress, CardHeader } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom'
import { getStorage } from '../utils';

type Props = RouteComponentProps
const Record: FunctionComponent<Props> = (props: Props) => {

  useEffect(() => {
    getNextRoute()
  }, [])
  const getNextRoute = async () => {
    let storage = await getStorage()
    console.log('storage', storage)
    switch (true) {
      case Object.keys(storage).length === 0:
        props.history.push('/signup')

    }

  }
  return (
    <Fragment>

      <CardContent>


        <CircularProgress style={{ margin: '0 auto' }} />

      </CardContent>
    </Fragment>
  );
};

export { Record };
