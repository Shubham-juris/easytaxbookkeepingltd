import React from 'react';
import search from '../../assets/Home/seacrch.jpg';
import popular from '../../assets/Home/popular.jpg';
import value from '../../assets/Home/value.jpg';

const FlipCards = () => {
  const cards = [
    {  
        title: 'New Products',
        description:  ' Check out our newest arrivals, featuring the latest innovations and styles. Fresh, high-quality items designed to enhance your lifestyle and keep you updated with trends. Discover something new and exciting with every visit.',
        img: search,
      },
      {
        title: 'Most Popular',
        description: 'Explore our top-rated favorites loved by many. These trusted products combine quality, performance, and customer satisfaction, making them perfect choices for everyday needs.',
        img: popular,
      }, 
      {
    
        title: 'Best Value',
        description: 'Find excellent quality products at affordable prices. Our Best Value picks offer great performance and reliability without breaking the bank.',
    
        img: value,
      },
  ];

  return (
    <div className="max-w-7xl mx-auto flex flex-col mt-16 lg:flex-row items-center gap-10 px-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-full lg:w-1/3"
          style={{ perspective: '1000px' }}
        >
          <div
            className="relative w-full h-[400px] transition-transform duration-700"
            style={{ transformStyle: 'preserve-3d' }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotateY(180deg)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotateY(0deg)')}
          >
            {/* Front Side */}
            <div
              className="absolute w-full h-full bg-white shadow-md rounded-lg overflow-hidden"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center  bg-opacity-40">
                <h2 className="text-white text-2xl font-semibold px-4 py-2 rounded">
                  {card.title}
                </h2>
              </div>
            </div>

            {/* Back Side */}
            <div
              className="absolute w-full h-full bg-[#769AA4] text-white p-6 rounded-lg flex flex-col items-center justify-center"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-center">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCards;