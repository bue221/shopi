import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useQueryParams = (): [
  URLSearchParams,
  (newParams: Record<string, string | null>) => void,
  (param: string) => void,
  () => void
] => {
  const location = useLocation();
  const navigate = useNavigate();
  const [queryParams, setQueryParams] = useState(
    new URLSearchParams(location.search)
  );

  useEffect(() => {
    setQueryParams(new URLSearchParams(location.search));
  }, [location.search]);

  const updateQueryParams = (newParams: Record<string, string | null>) => {
    const updatedParams = new URLSearchParams(queryParams);
    Object.keys(newParams).forEach((key) => {
      if (newParams[key] === null) {
        updatedParams.delete(key);
      } else {
        updatedParams.set(key, newParams[key]);
      }
    });
    navigate({ search: updatedParams.toString() });
  };

  const removeQueryParam = (param: string) => {
    const updatedParams = new URLSearchParams(queryParams);
    updatedParams.delete(param);
    navigate({ search: updatedParams.toString() });
  };

  const clearQueryParams = () => {
    navigate({ search: "" });
  };

  return [queryParams, updateQueryParams, removeQueryParam, clearQueryParams];
};

export default useQueryParams;
