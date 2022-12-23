import React from 'react';

export default function Form({ inputs, onSubmit, onChange, isLoading }) {
  return (
    <form className="w-full max-w-lg flex flex-col" onSubmit={onSubmit}>
      <div className="flex flex-wrap -mx-3 my-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="label">
            Type card name:
            <input
              className="input"
              type="text"
              name="name"
              value={inputs.name || ''}
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
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
