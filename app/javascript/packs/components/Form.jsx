import React from 'react';
import { useState } from 'react';
import { ID_LIST, CARDS_URL } from '../constants';

export default function Form() {
  const [inputs, setInputs] = useState({});
  const [isLoading, setIsLoading] = useState(false);
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
    };

    try {
      const data = await fetch(CARDS_URL, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      console.log('data :', data);
    } catch (error) {
      console.error('error :', error);
    } finally {
      setInputs({});
      setIsLoading(false);
    }
  };

  const formFields = [
    {
      label: 'Type card name',
      type: 'text',
      name: 'name',
      required: true,
    },
    {
      label: 'Type card description',
      type: 'textarea',
      name: 'desc',
      required: true,
    },
  ];

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 my-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="label">
            Type card name:
            <input
              className="input"
              type="text"
              name="name"
              value={inputs.name || ''}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="label">
            Choose due date:
            <input
              className="input"
              type="date"
              name="due"
              value={inputs.due || ''}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="label">
            Type card description:
            <input
              className="input"
              type="textarea"
              name="desc"
              value={inputs.desc || ''}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </div>
      {!isLoading && (
        <button className="btn btn-green pointer-events-auto" type="submit">
          Crate card
        </button>
      )}
    </form>
  );
}
