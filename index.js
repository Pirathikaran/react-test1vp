import React  from 'react'
import ReactDom from 'react-dom'
function Books(){
  return ( 
  <section> 
  <Book/>
 
  </section>
  );
}
const Book =() =>{
  return (
  <article>
     <CoverImage/>
    <Title/>  
    <Authour/>
  </article> 

  );
};

const CoverImage = () => 
  <img src =" https://images-na.ssl-images-amazon.com/images/I/81-%2B-WTltXL._AC_UL200_SR200,200_.jpg" alt="Child book"/>
  const Title =()=> <h1>Chid story book</h1>
  const Authour =()=> <p>by Pirathi !</p>


ReactDom.render(<Books/>,document.getElementById('root'));