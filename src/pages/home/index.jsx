import { useDispatch, useSelector } from "react-redux";
import DishCard from "../../components/cards/DishCard";
import { fetchDishes, selectDishes } from "../../store/features/dishesSlice";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDishes());
    return () => {};
  }, [dispatch]);
  const { data, error, loading } = useSelector(selectDishes);
  return (
    <div className="w-full">
      <section className="w-full h-96">
        <Banner />
      </section>
      <section className="w-full">
        <div className="w-full flex flex-col items-center py-10">
          <h1 className="text-3xl font-bold text-main">Our Dishes</h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 px-4">
            {data &&
              data.data?.foods
                ?.slice(0, 3)
                .map((dish) => (
                  <DishCard
                    key={dish?._id}
                    id={dish?._id}
                    category={dish?.category}
                    image={dish?.images?.[0]}
                    name={dish?.name}
                    price={dish?.priceInCents}
                  />
                ))}
          </div>
        </div>
        <div className="w-full flex justify-center items-center py-10">
          <button className="bg-main text-white px-4 py-2 rounded-lg">
            View More
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;

function Banner() {
  return (
    <div
      className="w-full h-full bg-right bg-cover bg-no-repeat relative flex flex-col justify-center items-start"
      style={{ backgroundImage: "url('/background/background4.jpg')" }}
    >
      <div className="h-full w-full absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-r from-30% z-0  from-black"></div>
      <div className="z-10 w-full px-4 sm:w-3/4 sm:px-6 md:w-2/3 lg:w-1/2 md:px-8 lg:px-10">
        <h1 className="w-full text-white uppercase font-black text-4xl">
          Satisfactory <span className="text-main">dishes</span> just for you
        </h1>
        <p className="text-white mt-5 w-full">
          We offer the best dishes in the world. Our dishes are prepared by
          world-class chefs. Order now and enjoy the best dishes.
        </p>
        <button className="bg-main text-white px-4 py-2 mt-5 rounded-lg">
          Order Now
        </button>
      </div>
    </div>
  );
}
