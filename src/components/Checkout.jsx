import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import {
  removeFromCart,
  incrementInCart,
  decrementInCart,
} from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const Checkout = () => {
  const products = useSelector((state) => state.cart.products);
  const itemsNumber = useSelector((state) => state.cart.productsNumber);
  const subtotal = useSelector((state) =>
    state.cart.products.reduce(
      (subtotal, product) => subtotal + product.price * product.quantity,
      0
    )
  );
  const dispatch = useDispatch();

  return (
    <div className="h-screen bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
        <div className="grid grid-cols-8 gap-10">
          <div className="col-span-6 bg-white">
            <div className="text-2xl xl:text-3xl font-semibold m-4">
              Shopping Cart
            </div>
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <div className="grid grid-cols-12  divide-y divide-gray-400 mr-4">
                    <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                      <div className="col-span-2">
                        <Link to={`/product/${product.id}`}>
                          <img
                            className="p-4 m-auto"
                            alt="product"
                            src={product.image_small}
                          />
                        </Link>
                      </div>
                      <div className="col-span-6">
                        <div className="font-medium text-black mt-2">
                          <Link to={`/product/${product.id}`}>
                            <ProductDetails
                              product={product}
                              hasRatings={false}
                            />
                          </Link>
                        </div>
                        <div className="text-sm xl:text-base text-blue-500 font-semibold mt-2">
                          <button
                            onClick={() => dispatch(removeFromCart(product.id))}
                          >
                            Delete
                          </button>
                        </div>
                        <div className="grid grid-cols-3 w-20 text-center bg-gray-50 mt-4">
                          <div
                            onClick={() =>
                              dispatch(decrementInCart(product.id))
                            }
                            className="text-xl xl:text-2xl bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
                          >
                            -
                          </div>
                          <div>{product.quantity}</div>
                          <div
                            onClick={() => {
                              dispatch(incrementInCart(product.id));
                            }}
                            className="text-xl xl:text-2xl bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-lg xl:text-xl font-semibold mt-2 mr-4">
                        ${product.price}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="text-xl xl:text-2xl text-right mb-4 mr-10">
              Subtotal ({itemsNumber} item):{" "}
              <span className="font-semibold">${subtotal}</span>
            </div>
          </div>
          <div className="col-span-2 bg-white rounded h-[250px] p-7">
            <div className="text-xs xl:text-sm text-green-800 mb-2">
              Your order qualifies for{" "}
              <span className="font-bold">FREE DELIVERY</span>. Delivery Details
            </div>
            <div className="text-base xl:text-lg mb-4">
              Subtotal ({itemsNumber} item):{" "}
              <span className="font-semibold">${subtotal}</span>
            </div>
            <button className="btn">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
