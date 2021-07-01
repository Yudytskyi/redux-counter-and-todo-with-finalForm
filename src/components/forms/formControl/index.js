import React from 'react';

export const Input = ({ input, meta, ...rest }) => {
  const isError = meta.touched && meta.error;

  return (
    <div>
      <input {...input} {...rest} />
      {isError && <span>{meta.error}</span>}
    </div>
  );
};
