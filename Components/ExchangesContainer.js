import React,{useEffect , useState} from 'react';
import ExchangeRow from './ExchangeRow';
import index from '../index.css';
import { data } from 'autoprefixer';


const Base_url = "http://api.exchangeratesapi.io/v1/latest?access_key=d30bfbe1ea4a6c68d12f5c0482db6d0f";
function ExchangesContainer() {

    
    const [CurrencyOptions , setCurrencyOptions] = useState([]);
    const [FromCurrency ,  setFromCurrency] = useState();
    const [ToCurrency ,  setToCurrency] = useState();
    const [ActiveCurrencyRate , setActiveCurrencyRate] = useState();
    const [IsFromAmount , setIsFromAmount] = useState(true);
    const [Amount , setAmount] = useState(1);
    console.log(CurrencyOptions);
    let FromAmount , ToAmount;
    if(IsFromAmount){
        FromAmount = Amount ;
        ToAmount = Amount*ActiveCurrencyRate;
    }else{
        ToAmount = Amount;
        FromAmount = Amount/ActiveCurrencyRate;
    }
    console.log(ActiveCurrencyRate);

    // console.log(CurrencyOptions);
    useEffect(() =>{
        fetch(Base_url)
       .then(response => response.json())
       .then(data => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency([...Object.keys(data.rates)][0]);
        setActiveCurrencyRate(data.rates[firstCurrency]);
       })
    }, [])

    useEffect(()=>{
        if(FromCurrency != null && ToCurrency!=null){
            fetch(`${Base_url}?base=${FromCurrency}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        }
    },[FromCurrency , ToCurrency])
    function onfirstInputChange(e){
        setAmount(e.target.value);
        setIsFromAmount(true);
    }

    function onSecondInputChange(e){
        setAmount(e.target.value);
        setIsFromAmount(false);
    }
    return (
        <div className=" lg:absolute lg:top-2/4 lg:right-32 md:absolute md:top-2/4 md:right-32 mt-7 px-10">
            <div>
                <h2 className="text-center text-second_color mb-5 text-3xl">Convert</h2>
            <ExchangeRow CurrencyOptions={CurrencyOptions}
                         SelectedCurrency={FromCurrency}
                         onChangecurrency={e => setFromCurrency(e.target.value)}
                         amount={FromAmount}
                         onInputChange={onfirstInputChange}/>
            <div className= " text-third_color font-bold text-4xl text-center my-2"><i className="fas fa-sync-alt"></i></div>
            <ExchangeRow  CurrencyOptions={CurrencyOptions}
                          SelectedCurrency={ToCurrency}
                          onChangecurrency={e => setToCurrency(e.target.value)}
                          amount = {ToAmount}
                          onInputChange={onSecondInputChange}/>
            </div>
        </div>
        
    );
}

export default ExchangesContainer;