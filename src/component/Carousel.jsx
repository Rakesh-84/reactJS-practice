import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel({ items, autoSlide = true, autoSlideInterval = 4000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDetails, setShowDetails] = useState(true);

  // Auto-slide effect
  useEffect(() => {
    if (!autoSlide) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, items.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (!items || items.length === 0) {
    return <div className="text-gray-500">No items to display</div>;
  }

  const currentItem = items[currentSlide];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Carousel Container */}
      <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg overflow-hidden shadow-lg">
        {/* Slides */}
        <div className="relative h-96 flex items-center justify-center overflow-hidden">
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="h-full w-full flex flex-col items-center justify-center p-8 bg-white/50">
                <h2 className="text-4xl font-bold text-indigo-600 mb-4">{item.product}</h2>
                <p className="text-xl text-gray-700 mb-4">{item.category}</p>
                
                {/* Toggle Button */}
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="mb-6 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors duration-300"
                >
                  {showDetails ? 'Hide Details' : 'Show Details'}
                </button>

                {/* Item Details - Conditionally Rendered */}
                {showDetails && (
                  <>
                    <div className="grid grid-cols-3 gap-8 mt-6 animate-fadeIn">
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Price</p>
                        <p className="text-2xl font-bold text-green-600">${item.unitPrice}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Quantity</p>
                        <p className="text-2xl font-bold text-blue-600">{item.quantity}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Revenue</p>
                        <p className="text-2xl font-bold text-purple-600">${item.revenue}</p>
                      </div>
                    </div>

                    {/* Seller & Region */}
                    <div className="mt-6 flex gap-8 text-gray-700">
                      <span><strong>Rep:</strong> {item.rep}</span>
                      <span><strong>Region:</strong> {item.region}</span>
                      <span className="px-3 py-1 bg-indigo-100 rounded-full">
                        {item.status}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white rounded-full p-2 z-10 transition-all duration-300 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white rounded-full p-2 z-10 transition-all duration-300 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-indigo-600 w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-4 text-gray-600">
        <p>
          Slide <span className="font-bold text-indigo-600">{currentSlide + 1}</span> of{' '}
          <span className="font-bold">{items.length}</span>
        </p>
      </div>
    </div>
  );
}
