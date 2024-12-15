/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";

// Tipos de las solicitudes
type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

// Opciones para la petición
interface RequestOptions<T> {
  method?: RequestMethod;
  body?: T;
  headers?: Record<string, string>;
}

// Respuesta del hook
interface UseApiResponse<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
  request: <R>(endpoint: string, options?: RequestOptions<R>) => Promise<T>;
}

function useApi<T = any>({
  baseURL = "https://api.escuelajs.co/api/v1",
}: {
  baseURL?: string;
}): UseApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const request = useCallback(
    async <R,>(endpoint: string, options?: RequestOptions<R>): Promise<T> => {
      setIsLoading(true);
      setError(null);

      const { method = "GET", body, headers } = options || {};

      try {
        const response = await fetch(baseURL + endpoint, {
          method,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          body: body ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const responseData: T = await response.json();
        setData(responseData);
        return responseData;
      } catch (err: any) {
        setError(err.message || "An unknown error occurred");
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [baseURL]
  );

  return { data, error, isLoading, request };
}

export default useApi;
