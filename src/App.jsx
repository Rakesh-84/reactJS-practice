import Carousel from './component/Carousel';
import { orders } from './Data/data';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">
          Product Carousel
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Slide through our sales data and explore products, pricing, and more
        </p>
        
        <Carousel 
          items={orders} 
          autoSlide={true} 
          autoSlideInterval={4000}
        />

        {/* Summary Section */}
        <div className="mt-16 grid grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-semibold">Total Products</h3>
            <p className="text-4xl font-bold text-indigo-600">{orders.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-semibold">Total Revenue</h3>
            <p className="text-4xl font-bold text-green-600">
              ${orders.reduce((sum, order) => sum + order.revenue, 0).toLocaleString()}
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
