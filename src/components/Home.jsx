import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import InputCheckLifted from './InputCheckLifted';
import InputCheck from './InputCheck';


const Home = () => {
    const [ percentState, setPercentState ] = useState({
        inputNumber: 100,
        percent: 50
    });
    
    const [ onePercent, setOnePercent ] = useState("");

    const updateInput = (event) => {
        event.preventDefault();
        let v = Math.min(parseInt(event.target.value), 1000);
        if (isNaN(v)) v = "";
        setPercentState({
            inputNumber: v,
            percent: percentState.percent
        });
    };

    const updatePercent = (event) => {
        event.preventDefault();
        let v = Math.min(parseInt(event.target.value), 100);
        if (isNaN(v)) v = "";
        setPercentState({
            inputNumber: percentState.inputNumber,
            percent: v
        });
    };

    var sectionPercent = 100 - (percentState.inputNumber * percentState.percent * 0.01 - Math.floor(percentState.inputNumber * percentState.percent * 0.01)) * 100;
    console.log(sectionPercent);

    return (
        <Container className="Home">
            <h1>Percent Manipulative</h1>
            <div className="input">
                <h3>Input Number: <input type="number" value={percentState.inputNumber} onChange={updateInput} /></h3>
                <h3>Input Percent: <input type="number" value={percentState.percent} onChange={updatePercent} />%</h3>
            </div>
            <div className="manipulative">
                <div className="grid">
                    { (new Array(percentState.inputNumber)).fill(0).map((_, idx) => (
                        <div key={idx} className={
                            idx < Math.floor(percentState.percent * percentState.inputNumber * 0.01) ? "filled" : ""}
                            style={ idx >= Math.floor(percentState.percent * percentState.inputNumber * 0.01) && idx < percentState.percent * percentState.inputNumber * 0.01 && sectionPercent > 0 ? {
                                background: 'linear-gradient(to bottom, rgba(30, 87, 153, 0) 0%, rgba(41, 137, 216, 0) ' + sectionPercent + '%, pink ' + (sectionPercent + 1) + '%, pink 100%)'
                            } : {}}></div>
                    )) }
                </div>
                <div className="explanation">
                    <h3>1% of {percentState.inputNumber} = <InputCheckLifted val={onePercent} onUpdate={setOnePercent} target={percentState.inputNumber * 0.01} /></h3>
                    <h3>{percentState.percent}% of {percentState.inputNumber} = </h3>
                    <h3>{onePercent} &#215; {percentState.percent} = <InputCheck target={ percentState.inputNumber * percentState.percent * 0.01 } />%</h3>
                </div>
            </div>
        </Container>
    );
}

export default Home;