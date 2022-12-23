import React from 'react';
import Form from './Form';
import List from './List';
import { useState, useEffect } from 'react';
import { ID_LIST, CARDS_URL } from '../constants';

export default function App() {
  const [inputs, setInputs] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchCards = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(CARDS_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error('error :', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const body = {
      name: inputs.name,
      desc: inputs.desc,
      idList: ID_LIST,
      due: inputs.due
    };

    try {
      const response = await fetch(CARDS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      console.log(`card ${data.name} created`);
      await fetchCards()
    } catch (error) {
      console.error('error :', error);
    } finally {
      setInputs({});
      setIsLoading(false);
    }
  };

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="container mx-auto">
        <h1 className="font-bold text-gray-900 text-2xl my-4">
          Callbell Full Stack Test
        </h1>
        <Form
          isLoading={isLoading}
          inputs={inputs}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
        <List isLoading={isLoading} cards={cards} />
      </div>
    </div>
  );
}
