
import React, { useState } from 'react';
import './calculator.css';

function Calculator() {

    const [investment, setInvestment] = useState('');
    const [years, setYears] = useState('');
    const [returnRate, setReturnRate] = useState('');
    const [currency, setCurrency] = useState('Rs');
    const [result, setResult] = useState({
        total: 0,
        wealthGained: 0,
        maturityValue: 0,
    });
    const [mode, setMode] = useState('SIP');


    const calculateResult = () => {
        let amount = investment;
        let rate = (returnRate/100)/12;
        let months = 12*years;

        const checkedValue = mode === 'SIP';
        let wealthGained = 0,
        total = 0,
        maturityValue = 0;

        if (checkedValue) {
            wealthGained = Math.round(amount * (Math.pow(1 + rate, months) - 1) * ( (1 + rate) / (rate)));
            total = amount * 12 * years;

            maturityValue = wealthGained;

            wealthGained -= total;
        } 
        else {
            total = amount*12*years;
            wealthGained = Math.round(Math.pow(1 + returnRate / 100, years) * total);
            console.log(wealthGained);
            maturityValue = wealthGained;

            wealthGained = wealthGained - total;
        }


        // const maturityAmount = calculateSIPMaturityAmount(investment, years, returnRate);
        // let total = maturityAmount;
        // let wealthGained = total - investment;
        // let maturityValue = maturityAmount;


        setResult({
            total: isNaN(total) ? '0' : total,
            wealthGained: isNaN(wealthGained) ? '0' : wealthGained,
            maturityValue: isNaN(maturityValue) ? '0' : maturityValue,
        });
    };

    const currencyChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
      <>
        <div className="body-background">
            <div className="header">Mutual Fund Investment Calculator</div>
            <div className="page-container">
                <div className="switch-container">
                    <div className="radio-button">
                        <label htmlFor="sip">SIP</label>

                        <input type="radio" checked={mode === 'SIP'} 
                        onChange={() => setMode('SIP')} 
                        name="checked" value="SIP" />

                        <label htmlFor="lumpsum">LumpSum</label>

                        <input type="radio" checked={mode === 'LumpSum'} 
                        onChange={() => setMode('LumpSum')} 
                        name="checked" value="LumpSum"/>

                    </div>
                    <div className="dropdown">
                        Currency
                        <select onChange={currencyChange} id="currency" className="currency">
                        <option value="Rs">INR</option>
                        <option value="$">USD</option>
                        </select>
                    </div>
                </div>
                <div className="input-container">
                    <div>
                        <div>Monthly Investment</div>
                        <br />
                        <div>
                        <input id="investment" type="text" value={investment} 
                            onChange={(e) => setInvestment(e.target.value)} />
                        </div>
                        <br />
                        <div>Number of Years </div>
                        <br/>
                        <div>
                            <input id="years" type="number" value={years} 
                                onChange={(e) => setYears(e.target.value)} />
                        </div>
                        <br />
                        <div>Expected Rate of Return </div>
                        <br />
                        <div>
                            <input id="return-rate" type="text" value={returnRate}
                                onChange={(e) => setReturnRate(e.target.value)}  />
                        </div>
                    </div>
                </div>
                <br />
                <div className="btn-calculate">
                    <button type="button" onClick={calculateResult}>
                        Calculate
                    </button>
                </div>
                <br />
                <div style={{ display: 'flex' }}>
                    <div className="result">Result :</div>
                        <div className="result-container">
                            <div>Monthly Investment for {mode}</div>
                            <br />
                            <div>
                            <span>{currency}:</span> <span>{investment}</span>
                            </div>
                            <br />
                            <div>Number of Years {mode}</div>
                            <br />
                            <div>
                            <span>Years:</span><span>{years}</span>
                            </div>
                            <br />
                            <div>Expected Rate of Return {mode}</div>
                            <br />
                            <div>
                            <span>Percentage(%):</span> <span>{returnRate}</span>
                            </div>
                        </div>
                        <div className="result-container">
                            <div>Total Investment 💸</div>
                            <br />
                            <div>
                            <span>{currency}.</span> <span>{result.total}</span>
                            </div>
                            <br />
                            <div>Wealth Gained 💸</div>
                            <br />
                            <div>
                            <span>{currency}.</span> <span>{result.wealthGained}</span>
                            </div>
                            <br />
                            <div>Maturity Value 💸</div>
                            <br />
                            <div>
                            <span>{currency}.</span> <span>{result.maturityValue}</span>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
      </>
    );
}

export default Calculator;
