import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDish, selectDish } from "../../store/features/dishSlice";
import { useEffect, useState } from "react";
import Form from "../../components/auth/Form";
import { userOrderFields } from "../../utils/userFormFields";
import { useCreateOrder } from "../../hooks/useCreateOrder";

const initialState = {
  deliveryAddress: "",
  quantity: "",
  foodId: "",
};

function Order() {
  const [state, setState] = useState(initialState);
  const { id } = useParams();
  const { data, error, loading } = useSelector(selectDish);
  const dispatch = useDispatch();
  const { createOrder, state: orderState } = useCreateOrder();

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder(state);
  };


  useEffect(() => {
    dispatch(fetchDish(id));
    setState((prev) => ({ ...prev, foodId: id }));
    return () => {};
  }, [dispatch, id]);

  return (
    <div className="flex flex-col items-center w-full gap-10">
      <section className="w-full flex flex-col items-center mt-6">
        <Form
          formHeading={"Delivery Info"}
          fields={userOrderFields}
          buttonText={"Place Order"}
          state={state}
          handleChange={setState}
          handleSubmit={handleSubmit}
        />
      </section>
      <section className="w-full flex flex-col items-center mb-10">
        <div>
          <div className="flex flex-col items-center gap-4">
            {data?.data.food.images.map((image, index) => (
              <div className="h-48 max-w-96" key={index}>
                <img
                  className="object-cover h-full"
                  src={"http://localhost:3000/images/" + image}
                  key={index}
                  alt={data?.data.food.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Order;
