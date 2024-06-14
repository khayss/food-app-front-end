import { useNavigate } from "react-router-dom";

function DishCard({ price, name, category, image, id }) {
  const naviage = useNavigate();
  const handleButtonClick = (id) => {
    naviage(`/dish/${id}`);
  };
  return (
    <div className="w-80 overflow-hidden rounded-md bg-blue-50">
      <div className="h-48">
        <img src={image} alt={name} className="object-cover h-full" />
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
            onClick={()=>handleButtonClick(id)}
            className="w-1/2 px-3 py-3 rounded-md text-zinc-100 bg-blue-500 text-lg font-medium"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
