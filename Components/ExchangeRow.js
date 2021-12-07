import React,{useState} from 'react';
import index from '../index.css';

function ExchangeRow(props) {
 const {
  CurrencyOptions,
  SelectedCurrency,
  onChangecurrency,
  amount,
  onInputChange
 }=props;
  return (
          <>
          <input  type="number" className=" w-52 h-12 mr-6 py-1 px-2 text-center bg-black_color text-white_color rounded-lg" value={amount} onChange={onInputChange}  ></input>
          <select value={SelectedCurrency} onChange={onChangecurrency} className=" w-16 h-12 py-1 bg-black_color text-white_color rounded-lg">
             {CurrencyOptions.map(currency => <option key={currency} value={currency}>{currency}</option>)}
          </select>
          </>
          
  );
}

export default ExchangeRow;