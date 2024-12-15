import { useEffect } from "react";
import ProductCard from "../components/common/ProductCard";
import useApi from "../hooks/useApi";
import { TProduct } from "../types";
import { cleanImagePath } from "../utils/images";

const Home = () => {
  const { data, error, request } = useApi({});

  const fetchProducts = async () => {
    try {
      await request<TProduct[]>(`/products?limit=50`, {
        method: "GET",
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error)
    return (
      <div className="h-full justify-center items-center flex">
        <h1 className="text-4xl text-red-500">Error to load products</h1>
      </div>
    );

  return (
    <div className="grid gap-4 grid-cols-4 w-full">
      {(data ?? [])?.map((i: TProduct, index: number) => (
        <ProductCard
          key={index}
          imageSrc={cleanImagePath(i.images[0])}
          price={i.price}
          category={i.category.name}
          name={i.title}
        />
      ))}
    </div>
  );
};

export default Home;
