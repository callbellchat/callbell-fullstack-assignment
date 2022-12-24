import React from 'react';

export default function List({ isLoading, cards }) {
  return (
    <div className="max-w-sm mt-10">
      {isLoading && <div>Loading</div>}
      {!isLoading &&
        cards.length &&
        cards.map((card, index) => {
          return (
            <div key={index} className="my-4 px-6 py-4 rounded  shadow-lg">
              <div className="font-bold text-xl mb-2">{card.name}</div>
              <p className="text-gray-700 text-base">{card.desc}</p>
              <div className="text-sm my-4">
                <p className="text-gray-900 leading-none">Due date</p>
                <p className="text-gray-600">{card.due}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
