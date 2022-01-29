import React, { FC } from 'react';

interface PropType {
    component: React.FC,
    [x:string]: any,
}

const PrivateRoute: FC<PropType> = ({ component: Component, ...rest }: PropType) => {
    console.log('rest', rest);
    const isAuthenticated = true;
    if (isAuthenticated) return <Component {...rest}/>;
    return null;
};

export default PrivateRoute;