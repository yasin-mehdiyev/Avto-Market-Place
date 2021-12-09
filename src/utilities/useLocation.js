import { useLocation } from 'react-router-dom';

const usePathname = (index) => {
  const location = useLocation();
  return location.pathname.split('/')[index];
};

export default usePathname;