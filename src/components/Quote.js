import React from 'react';
import Header from './Header';

function Quote() {
  return (
    <>
      <Header />
      <section className="quote-section">
       <p>
{' '}
Mathmatics is not about numbers,eauations, computations,
        or algorithms: it is about understanding.
<span className="author">-William Paul Thurston</span>
       </p>
      </section>
    </>
  );
}

export default Quote;
