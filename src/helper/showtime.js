import React from 'react';

export const showtime = (time) => {
  const times = new Date(time);

  return (
    <h6>
      {times.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} hrs
    </h6>
  );
};
