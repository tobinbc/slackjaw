import { CircularProgress } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';

const getStorage = () => new Promise(resolve => chrome.storage.local.get(resolve))

type Props = RouteComponentProps
const Holding: FunctionComponent<Props> = (props: Props) => {
  const [redirect, setRedirect] = useState('')
  useEffect(() => {
    try {
      getNextRoute()
    } catch (e) {
      setRedirect(`/error/${e.message}`)
    }
  }, [])
  const getNextRoute = async () => {
    let storage:any = await getStorage()
    if (typeof storage !== 'object') {
      throw new Error('Storage not found')
    }
    switch (true) {
      case storage.ok === undefined:
        setRedirect('/signup')
      case storage.ok === true:
        setRedirect('/record')
    }
  }
  if (redirect === '') {
    return (
      <CardContent>
        <CircularProgress style={{ margin: '0 auto' }} />
      </CardContent>
    );
  }
  return <Redirect to={redirect} />
};

export { Holding };

