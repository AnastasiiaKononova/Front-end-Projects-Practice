import React from 'react';
import prices from './prices.json';
import PricingCard from './PricingCard/PricingCard';
import styles from './PriceBox.module.sass';

const PriceBox = () => {
  const pricingCards = prices.map(priceData => (
    <PricingCard
      // key={priceData.id}
      // color={priceData.color}
      // borderColor={priceData.borderColor}
      // type={priceData.type}
      // describeType={priceData.describeType}
      // price={priceData.price}
      // profit={priceData.profit}
      link='https://google.com'
      {...priceData}
    />
  ));

  return pricingCards;
};

export default PriceBox;
