import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  };

  const handleSumNumbers = () => {
    const sum = Number(firstNumber) + Number(currentNumber);
    setCurrentNumber(String(sum));
    setFirstNumber('0'); 
    setOperation('');
  };

  const handleMinusNumbers = () => {
    const difference = Number(firstNumber) - Number(currentNumber);
    setCurrentNumber(String(difference));
    setFirstNumber('0'); 
    setOperation('');
  };

  const handleMultiplyNumbers = () => {
    const product = Number(firstNumber) * Number(currentNumber);
    setCurrentNumber(String(product));
    setFirstNumber('0'); 
    setOperation('');
  };

  const handleDivideNumbers = () => {
    if (currentNumber !== '0') {
      const quotient = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(quotient));
      setFirstNumber('0'); 
      setOperation('');
    } else {
      alert("Divisão por zero não é permitida.");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        default:
          break;
      }
    }
  };

  const handleOperation = (op) => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
    }
    setCurrentNumber('0'); 
    setOperation(op);
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="*" onClick={() => handleOperation('*')} type="operation"/>
          <Button label="/" onClick={() => handleOperation('/')} type="operation"/>
          <Button label="c" onClick={handleOnClear} type="operation"/>
          <Button label="." type="operation"/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} type="number"/>
          <Button label="8" onClick={() => handleAddNumber('8')} type="number"/>
          <Button label="9" onClick={() => handleAddNumber('9')} type="number"/>
          <Button label="-" onClick={() => handleOperation('-')} type="operation" />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} type="number"/>
          <Button label="5" onClick={() => handleAddNumber('5')} type="number"/>
          <Button label="6" onClick={() => handleAddNumber('6')} type="number"/>
          <Button label="+" onClick={() => handleOperation('+')} type="operation"/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} type="number"/>
          <Button label="2" onClick={() => handleAddNumber('2')} type="number"/>
          <Button label="3" onClick={() => handleAddNumber('3')} type="number"/>
          <Button label="=" onClick={handleEquals} type="operation" />
        </Row>
        <Row>
        <Button label="0" onClick={() => handleAddNumber('0')} type="number"/>
        </Row>
      </Content>
    </Container>
  );
};

export default App;
