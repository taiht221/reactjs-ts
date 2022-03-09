import * as React from 'react';
import { Link,useParams } from 'react-router-dom';

export interface  AccountProps {
}

export function Account (props:  AccountProps) {
    let { id } = useParams();
  console.log(id);
  return (
    <div>
      Account
    </div>
  );
}
