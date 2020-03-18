import React  from 'react'
import ReactDom from 'react-dom'
function Greeting(){
  return ( 
  <section> 
  <Person/>
  <Message/>
  </section>
  );
}

const Person = () => <h1>Pirathi</h1>;
const Message = () => <h1>Laxshana</h1>;

ReactDom.render(<Greeting/>,document.getElementById('root'));