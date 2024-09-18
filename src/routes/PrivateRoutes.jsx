import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <progress className="progress w-10 ms-10 my-10"></progress>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>

};

export default PrivateRoutes;