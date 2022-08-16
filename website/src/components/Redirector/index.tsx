import React, {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

function useQuery() {
  const {search} = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Redirector = () => {
  let query = useQuery();
  let navigate = useNavigate();

  useEffect(() => {
    if (query.get('redict')) {
      return navigate(`${query.get(`redirect`)}`);
    }
  }, [navigate, query]);

  return <></>;
};

export default Redirector;
