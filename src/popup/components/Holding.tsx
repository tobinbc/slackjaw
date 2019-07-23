import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React, { Fragment, FunctionComponent, useEffect } from 'react';
import { CircularProgress, CardHeader } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom'

const getStorage = () => new Promise(resolve => chrome.storage.local.get(resolve))

type Props = RouteComponentProps
const Holding: FunctionComponent<Props> = (props: Props) => {
  const [redirect,setRedirect] = useState('')
  useEffect(() => {
    getNextRoute()
  }, [])
  const getNextRoute = async () => {
    let storage = await getStorage()
    switch (true) {
      case Object.keys(storage).length === 0:
        props.history.push('/signup')
    }
  }
  return (
    <CardContent>
      <CircularProgress style={{ margin: '0 auto' }} />
    </CardContent>
  );
};

export { Holding };
