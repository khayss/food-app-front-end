import { useNavigate } from "react-router-dom";

function DishCard({ price, name, category, image, id }) {
  const naviage = useNavigate();
  const handleButtonClick = (id) => {
    naviage(`/dish/${id}`);
  };
  return (
    <div className="w-4/5 md:w-full overflow-hidden rounded-md bg-white self-center justify-self-center">
      <div className="h-48 w-full">
        <img
          src={"https://food-ordering-app-backend-ypwh.onrender.com/images/public/" + image}
          alt={name}
          className="object-cover h-full"
        />
      </div>
      <div className="flex flex-col items-start px-8 pt-6 pb-8 gap-2">
        <div>
          <h2 className="text-lg font-medium text-zinc-600 tracking-wider">
            ${(parseFloat(price) / 100).toFixed(2)}
          </h2>
        </div>
        <div className="capitalize flex flex-col items-start gap-0">
          <h3 className="text-lg text-zinc-600">{name}</h3>
          <p className="text-sm italic text-zinc-500">{category}</p>
        </div>
        <div className="w-full flex flex-col items-start">
          <button
            onClick={() => handleButtonClick(id)}
            className="w-1/2 px-3 py-3 rounded-md text-zinc-100 bg-main text-lg font-medium"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
