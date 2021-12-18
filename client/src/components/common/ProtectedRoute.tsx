import React, { FC } from 'react';

interface PropType {
    component: React.FC;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
    const isAuthenticated = true;
    if (isAuthenticated) return <Component />;
    return null;
};

export default PrivateRoute;