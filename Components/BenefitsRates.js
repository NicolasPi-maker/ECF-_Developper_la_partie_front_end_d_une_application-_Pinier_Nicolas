import React from 'react';

const BenefitsRates = ( {label, description, price, i} ) => {
  return (
    <article key={i}>
        <h5>{`"${label}"`}</h5>
        <h5>{description}</h5>
        <h5>{price > 0 ? `${price}€` : null}</h5>
    </article>
  )
}

export default BenefitsRates;