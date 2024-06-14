import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import ReactLogo from "../logo.svg";

const MainLayout = ({ children }) => {
  //   const { cartState } = useContext(CartContext);
  const [showHamburger, SetshowHamburger] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleOutsideHamburgerClick = (e) => {
      if (!ref.current?.contains(e.target)) {
        SetshowHamburger(false);
      }
    };
    window.addEventListener("mousedown", handleOutsideHamburgerClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideHamburgerClick);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center min-h-dvh justify-between">
      <header className="w-full fixed flex items-center bg-blue-100 h-[60px] border-0 z-50 top-0 lg:px-[10%] xl:px-[15%]">
        <nav className="w-full px-8 flex items-center h-full">
          <ul className="w-full grid grid-cols-4 grid-rows-1 justify-between h-full items-center">
            <li className="col-start-1 col-end-2 flex justify-start md:hidden md:invisible">
              <div>
                <button
                  className={`${
                    showHamburger ? "invisible hidden" : "visible block"
                  } md:invisible md:hidden`}
                  onClick={() => SetshowHamburger(true)}
                >
                  {/* <MenuIcon /> */}
                </button>
              </div>
            </li>
            <li className="col-start-2 col-end-4 flex justify-center md:col-start-1 md:justify-start">
              <div className="flex items-center justify-center">
                <Link to={"/"} className="flex gap-1 items-end text-xl">
                  <div>{/* <ShoppingBasketIcon /> */}</div>
                  <div>
                    <h1 className="leading-none font-bold italic">QuiPlace</h1>
                  </div>
                </Link>
              </div>
            </li>
            <li className="flex justify-end col-start-4 col-end-5">
              <div className="relative text-xl">
                <Link to={"/cart"}>
                  <IoMdCart className="text-2xl" />
                  <p className="absolute top-0 -right-4 shadow-md z-50 bg-red-600 text-white leading-none rounded-full text-sm py-1 px-1.5">
                    {/* {cartState.id.length} */}
                  </p>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <div className="relative w-full lg:px-[10%] xl:px-[15%] flex flex-col justify-center items-center mt-[60px]">
        {children}
      </div>
      <footer className="w-full flex items-center md:z-50 justify-center bg-blue-950 py-4 relative lg:px-[20%] xl:px-[15%] text-zinc-100">
        <div className="w-full flex">
          <ul className="w-full flex flex-col md:flex-row md:justify-around items-center gap-2">
            <li>
              <div className="flex gap-1 items-end text-xl">
                <div>{/* <ShoppingBasketIcon /> */}</div>
                <div>
                  <h1 className="leading-none font-bold italic">AllCart</h1>
                </div>
              </div>
            </li>
            <li>
              <p className="font-medium text-center">
                &#169; AllCart Inc., {new Date().getUTCFullYear()}
              </p>
              <p className="text-center text-sm">All right reserved.</p>
            </li>
            <li>
              <p className="text-center text-sm flex gap-2 items-center italic">
                <span>Powered by React</span>
                <span>
                  <img src={ReactLogo} style={{ width: "1.5rem" }} />
                </span>
              </p>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
