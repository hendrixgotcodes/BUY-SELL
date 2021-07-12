import React from 'react';

const navigationRef = React.createRef()

export const navigate = (name, params)=>{

    navigationRef.current?.navigate(name, params)

}

export default navigationRef
