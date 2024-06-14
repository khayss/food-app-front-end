import React from "react";
import { useGetOrders } from "../../hooks/useGetOrders";

function Dashboard() {
  const {
    orders: { data, error, loading },
  } = useGetOrders();
  return (
    <div>
      <section>
        <div>
          <h3>{`Welcome ${""}`}</h3>
        </div>
        <div>
          <h4>Recent Orders</h4>
        </div>
        <table className="">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((dish) => (
              <tr key={dish._id}>
                <td>{dish._id}</td>
                <td>{dish.createdAt}</td>
                <td>{dish.food.name}</td>
                <td>{dish.deliveryStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Dashboard;
