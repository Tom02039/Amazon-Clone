import Search from "./Search";
import {
  MapPinIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import USIcon from "./united-states.png";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px]">
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <img
              src={"../images/amazon.png"}
              alt="amazon icon"
              className="h-[30px] w-[100px] object-cover m-2"
            />
          </Link>
          <div className="grid grid-cols-[min-content_1fr] pr-4 pl-4">
            <MapPinIcon className="h-[20px] row-start-2 font-bold" />
            <div className="text-xs xl:text-sm col-start-2">Deliver to</div>
            <div className="text-sm xl:text-base font-bold col-start-2">
              United State
            </div>
          </div>
        </div>
        <div className="flex grow relative items-center">
          <Search />
        </div>
        <div className="m-6 flex gap-1 items-center font-bold text-sm">
          <img src={USIcon} alt="us flag icon" className="h-[20px]" />
          EN
        </div>
        <div className="flex items-center">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">
              Account & Lists
            </div>
          </div>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>
          <Link to={"/checkout"}>
            <div className="flex pr-3 pl-3">
              <ShoppingCartIcon className="h-[48px]" />
              <div className="relative">
                <div className="absolute right-[10px] font-bold m-2 text-orange-500">
                  {cart}
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex space-x-5 bg-amazonclone-light_blue text-white text-sm p-2 pl-6">
        <div className="flex gap-1 font-bold">
          <Bars3Icon className="h-[24px]" />
          All
        </div>
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </header>
  );
};

export default NavBar;
