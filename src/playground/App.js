// import logo from './logo.svg';
import './App.scss';
import NameTag from './playground/nameTag'
// import Input from './components/Input'


const makeGreen = BaseComponent => props => {
  const addGreen ={
    style: {
      color:'green'
    }
  }
  
  const newProps = {
    ... props, ... addGreen
  };

  return <BaseComponent {...newProps} />
}

const removeInline = BaseComponent => props => {
  const newProps = {
    ... props
  };

  delete newProps.style;
  return <BaseComponent {...newProps} />
}

const GreenNameTag = makeGreen(NameTag);
const CleanNameTag = removeInline(NameTag);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='name title'>Names List</h1>
      
        <GreenNameTag firstName='Peter' lastName='Peterson' />
        <CleanNameTag firstName='john' lastName='Johnson' style={{color:'red'}}/>
        <NameTag firstName='Jill' lastName='Jillson' style={{color:'red'}}/>

        <NameTag/> 

      </header>
    </div>
  );
}

export default App;