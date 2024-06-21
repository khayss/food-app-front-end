import { useEffect } from "react";
import { useGetOrders } from "../../../../hooks/useGetOrders";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, selectUser } from "../../../../store/features/userSlice";
import useAuth from "../../../../hooks/useAuth";

function Dashboard() {
  const auth = useAuth("/login");

  const { data: userState } = useSelector(selectUser);
  const {
    orders: { data, error, loading },
  } = useGetOrders();

  return auth ? (
    <div className="w-full">
      <section className="w-full">
        <div>
          <h3>{`Welcome ${""}`}</h3>
        </div>
        <div>
          <h4>Recent Orders</h4>
        </div>
        <div className="w-full px-8">
          <div className="w-full border-2 border-b-0 rounded-lg overflow-hidden">
            <table className="w-full text-zinc-600">
              <thead className="w-full ">
                <tr className="w-full text-base border-b-2">
                  <th className="table-head">Order ID</th>
                  <th className="table-head">Date</th>
                  <th className="table-head">Name</th>
                  <th className="table-head">Status</th>
                </tr>
              </thead>
              <tbody className="text-base">
                {data?.map((dish) => (
                  <tr key={dish._id} className="w-full border-b-2">
                    <td className="table-data">{dish._id?.substring(0, 5)}</td>
                    <td className="table-data">{dateToTime(dish.createdAt)}</td>
                    <td className="table-data">{dish.food.name}</td>
                    <td className="table-data">{dish.deliveryStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  ) : (
    <></>
  );
}

export default Dashboard;

function dateToTime(data) {
  return new Date(data).toLocaleTimeString("en-US", { hour12: false });
}

function dateToDate(data) {
  return new Date(data).toDateString();
}
