import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const RequestList = observer(() => {
  const {request} = useContext(Context);
  return (
    <div>
      {request.requests.map(request =>

      )}
    </div>
  );
});

export default RequestList;