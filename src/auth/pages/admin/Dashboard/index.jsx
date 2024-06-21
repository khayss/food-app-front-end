import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { BiSolidDish } from "react-icons/bi";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";

const dashboardCardDetails = [
  {
    id: 1,
    title: "New Dish",
    Icon: IoMdAddCircle,
    to: "/admin/new-dish",
  },
  {
    id: 2,
    title: "Manage Dishes",
    Icon: BiSolidDish,
    to: "/admin/dishes",
  },
  {
    id: 3,
    title: "View orders",
    Icon: RiShoppingBag2Fill,
    to: "/admin/orders",
  },
  {
    id: 4,
    title: "Rider Applications",
    Icon: MdDeliveryDining,
    to: "/admin/rider",
  },
];

function AdminDashboard() {
  return (
    <div className="w-full">
      <section className="w-full flex flex-col items-center">
        <div className="w-full flex justify-center items-center text-center text-lg py-3 text-zinc-600">
          <h1 className="">Admin Dashboard</h1>
        </div>

        <div className="w-full px-8 py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-3">
          {dashboardCardDetails.map((item) => (
            <DashboardCard
              key={item.id}
              name={item.title}
              icon={<item.Icon />}
              to={item.to}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;

function DashboardCard({ name, icon, to }) {
  return (
    <Link to={to} className="xl:h-full w-full flex justify-center items-center">
      <div className="xl:h-full w-full flex flex-col gap-2 text-main rounded-lg bg-white items-center justify-center py-4 px-16">
        <div className="w-full text-4xl flex justify-center items-center">
          {icon}
        </div>
        <div className="font-medium w-full text-center flex flex-col items-center justify-center">
          <p>{name}</p>
        </div>
      </div>
    </Link>
  );
}
