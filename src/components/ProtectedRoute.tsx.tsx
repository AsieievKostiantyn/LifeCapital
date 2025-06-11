import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

interface ProtectedRouteProps {
  children: ReactNode;
  requireUnauth?: boolean;
}

const ProtectedRoute = ({
  children,
  requireUnauth = false,
}: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return null;

  if (requireUnauth && user) {
    return <Navigate to="/games" replace />;
  }

  if (!requireUnauth && !user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
