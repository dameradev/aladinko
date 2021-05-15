/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import formatMoney from '../../utils/formatMoney';

const FormStyled = styled.form`
  margin-right: 2rem;
  display: flex;
  flex-direction: column;

  label {
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 26rem;

    input,
    select {
      width: 15rem;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      border-radius: 50%;
      background-color: var(--red);
      padding: 0;
      padding-top: 0.5rem;
      /* line-height: 4rem; */
      height: 2.5rem;
      width: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const Carpet = ({ totalPrice, setTotalPrice, setCarpets, carpets }) => {
  const [carpetType, setCarpetType] = useState('normal');
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [price, setPrice] = useState(0);

  const handlePriceCalculation = () => {
    let calculatedPrice;
    if (carpetType === 'normal') {
      calculatedPrice = width * height * 4;
    } else if (carpetType === 'medium') {
      calculatedPrice = width * height * 6;
    } else if (carpetType === 'high') {
      calculatedPrice = width * height * 8;
    }
    setPrice(calculatedPrice);
  };

  useEffect(() => {
    handlePriceCalculation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carpetType, width, height]);

  useEffect(() => {
    setTotalPrice(totalPrice + price);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price]);

  return (
    <FormStyled>
      <label>
        Tip preprog
        <select
          name="carpets"
          id="carpets"
          onChange={(e) => {
            e.preventDefault();
            setCarpetType(e.target.value);
          }}
          value={carpetType}
        >
          <option value="normal">Navadne</option>
          <option value="medium">Debelejše/Volnene</option>
          <option value="high">Perzijske/Orjentalske</option>
        </select>
      </label>
      <label htmlFor="width">
        Širina
        <input
          name="width"
          placeholder="Širina"
          value={width}
          type="number"
          onChange={(e) => {
            e.preventDefault();
            setWidth(e.target.value);
          }}
        />
      </label>
      <label htmlFor="width">
        Dolžina
        <input
          placeholder="Dolžina"
          value={height}
          type="number"
          onChange={(e) => {
            e.preventDefault();
            setHeight(e.target.value);
          }}
        />
      </label>
      <div className="footer">
        <p>
          Cena:{' '}
          <span className="price" data-value={price}>
            {formatMoney(price)}
          </span>
        </p>
        <button onClick={() => setCarpets(carpets - 1)} type="button">
          X
        </button>
      </div>
    </FormStyled>
  );
};

export default Carpet;
