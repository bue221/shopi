// import { PlusIcon } from 'lucide-react'

interface ProductCardProps {
  imageSrc?: string;
  category?: string;
  name?: string;
  price?: number;
}

export default function ProductCard({
  imageSrc,
  category = "Shoes",
  name = "Fantastic Frozen Shoes",
  price = 155,
}: ProductCardProps) {
  return (
    <div className="w-64 bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer">
      <div className="relative">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-48 object-cover"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src =
                "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg";
            }}
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No image available</span>
          </div>
        )}
        <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
          {/* <PlusIcon className="w-6 h-6 text-gray-600" /> */}+
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-genoa-100 text-genoa-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {category}
          </span>
          <span className="text-xl font-bold text-gray-900">${price}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
      </div>
    </div>
  );
}
