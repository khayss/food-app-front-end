import { useEffect } from "react";
import DishCard from "../../components/cards/DishCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchDishes, selectDishes } from "../../store/features/dishesSlice";

function Dishes() {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(selectDishes);
  useEffect(() => {
    dispatch(fetchDishes());
    return () => {};
  }, [dispatch]);

  return (
    <div className="w-full flex flex-col items-center mt-8">
      <section className="w-full">
        <div className="w-full flex flex-col items-center gap-8 lg:flex-row lg:justify-start">
          {data &&
            data.data?.foods?.map((dish) => (
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
      </section>
    </div>
  );
}

export default Dishes;
