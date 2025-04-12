import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

const RedirectIfAuth = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default RedirectIfAuth;
