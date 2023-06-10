import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { callAPI } from "../utils/CallApi";
import { ProductDetails } from "./";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");

    callAPI("data/search.json").then((searchResults) => {
      const categoryResults = searchResults[category];
      if (searchTerm) {
        const results = categoryResults.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(results);
      } else {
        setProducts(categoryResults);
      }
    });
  }, [searchParams]);

  return (
    <div className="min-w-[1200px] max-w-[1300px] m-auto">
      {products &&
        products.map((product, key) => (
          <Link key={key} to={`/product/${product.id}`}>
            <div className="h-[250px] grid grid-cols-12 rounded mt-1 mb-1">
              <div className="col-span-2 bg-gray-200 p-4">
                <img
                  className="m-auto"
                  alt="product"
                  src={product.image_small}
                />
              </div>
              <div className="col-span-10 bg-gray-50 border border-gray-100 hover:bg-gray-100">
                <div className="font-medium text-black p-2">
                  <ProductDetails product={product} hasRatings={true} />
                  <div className="text-xl xl:text-2xl pt-1">
                    ${product.price}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default SearchResults;
