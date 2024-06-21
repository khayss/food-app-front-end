import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import ReactLogo from "../logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { getUser, selectUser } from "../store/features/userSlice";
import SignupLoginButton from "../components/auth/SignupLoginButton";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(selectUser);

  useEffect(() => {
    dispatch(getUser());
    return () => {};
  }, [dispatch]);

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
    <div className="w-full flex flex-col items-center min-h-dvh justify-between bg-background bg-opacity-30">
      <header className="w-full fixed flex items-center bg-white h-[60px] border-0 z-50 top-0 lg:px-[10%] xl:px-[15%]">
        <nav className="w-full px-2 sm:px-4 md:px-6 lg:px-8 flex items-center h-full">
          <ul className="w-full grid grid-cols-4 grid-rows-1 justify-between h-full items-center">
            <li className="col-start-1 col-end-2 flex justify-start md:hidden md:invisible">
              <div>
                <button
                  className={`text-2xl ${
                    showHamburger ? "invisible hidden" : "visible block"
                  } md:invisible md:hidden`}
                  onClick={() => SetshowHamburger(true)}
                >
                  <IoMdMenu />
                </button>
              </div>
            </li>
            <li className="col-start-2 col-end-4 flex justify-center md:col-start-1 md:justify-start">
              <div className="flex items-center justify-center">
                <Link to={"/"} className="flex gap-1 items-end text-xl">
                  <div>{/* <ShoppingBasketIcon /> */}</div>
                  <div>
                    <h1 className="leading-none font-bold italic">QuiDine</h1>
                  </div>
                </Link>
              </div>
            </li>
            <li className="flex justify-end col-start-4 col-end-5">
              <div className="relative">
                <Link to={""}>
                  {data && data.userDetails ? (
                    <FaRegUserCircle className="text-2xl" />
                  ) : (
                    <SignupLoginButton />
                  )}
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <div className="relative w-full lg:px-[10%] xl:px-[15%] flex flex-col justify-center items-center mt-[60px]">
        {children}
      </div>
      <footer className="w-full flex items-center md:z-50 justify-center bg-zinc-500 py-4 relative lg:px-[20%] xl:px-[15%] text-zinc-100">
        <div className="w-full flex">
          <ul className="w-full flex flex-col md:flex-row md:justify-around items-center gap-2">
            <li>
              <div className="flex gap-1 items-end text-xl">
                <div>{/* <ShoppingBasketIcon /> */}</div>
                <div>
                  <h1 className="leading-none font-bold italic">QuiDine</h1>
                </div>
              </div>
            </li>
            <li>
              <p className="font-medium text-center">
                &#169; QuiDine Inc., {new Date().getUTCFullYear()}
              </p>
              <p className="text-center text-sm">All right reserved.</p>
            </li>
            <li>
              <p className="text-center text-sm flex gap-2 items-center italic">
                <span>Powered by React</span>
                <span>
                  <img
                    src={ReactLogo}
                    style={{ width: "1.5rem" }}
                    alt="footer logo"
                  />
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
