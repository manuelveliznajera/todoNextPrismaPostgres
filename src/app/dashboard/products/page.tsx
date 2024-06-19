import { ProductCard } from "@/product/components/productCard";
import { Product, products } from "@/product/data/product";

export default function productPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">

{
        products.map( product =>(
            <ProductCard key={product.id} {...product} />

        ))
}
    </div>
  );
}