import { useLocation } from 'react-router-dom';

function Dynamic() {
  const { pathname } = useLocation();
  const path = pathname.split('/');
  return <h1>Page {path} </h1>;
}

export default Dynamic;
