import { useState } from 'react';
import Image from 'next/image';
import { DataProduct } from '@/dummy/data.dummy';

interface CardProps extends DataProduct {
  onClick?: () => void;
}

export default function Card({ id, title, description, image, price, category, onClick }: CardProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      id={id}
      className="border p-4 rounded shadow-sm hover:bg-slate-200 cursor-pointer transition-all duration-300"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      {isLoading && <div className="w-full h-48 bg-gray-200 animate-pulse" />}
      <Image
        src={image || 'https://i.pinimg.com/736x/2a/86/a5/2a86a560f0559704310d98fc32bd3d32.jpg'}
        alt={title || 'Product Image'}
        width={500}
        height={300}
        className={`w-full h-auto object-cover ${isLoading ? 'hidden' : 'block'}`}
        onLoadingComplete={() => setIsLoading(false)}
      />
      <div className="flex flex-col gap-y-5 mt-4">
        <h2 className="text-lg text-slate-800 font-semibold">{title}</h2>
        <p className="text-slate-600">{description}</p>
        <p className="font-bold text-red-500">Rp {price}</p>
        <p className="text-sm text-gray-500">Category : {category}</p>
      </div>
    </div>
  );
}