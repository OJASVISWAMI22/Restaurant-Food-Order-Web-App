
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice.js';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-[#A288E3] p-4 px-4 py-4 text-sm text-stone-200 sm:px-6 md:text-base">
      <p
        className={
          'space-x-4 font-semibold uppercase text-stone-300 sm:space-x-6'
        }
      >
        <span>{totalCartQuantity} pizzas</span>
        <span>{totalCartPrice} Rupees </span>
      </p>
      <Link to={'/cart'}>Open Cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
