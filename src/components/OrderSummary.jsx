
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <div>
    
        <button
          type="button"
          aria-label="Back to Home"
          className="mb-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
            <p>Order Confirmed!</p>
    </div>
  )
}

export default OrderSummary