import Image from 'next/image';
import IMenuItem from '@/lib/interfaces/MenuItem';
import { menuItems } from '@/lib/api/menuItems';
import { handleATCClick } from '@/lib/useAddToCart';

export default function Menu() {


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {menuItems.map((product: IMenuItem) => (
            <div key={product.id} className="group">
              <Image
                alt={product.name}
                src={"/logo.png"}
                width={300}
                height={300}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.price.toFixed(2)}</p>
              <button onClick={handleATCClick}
                className="bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
