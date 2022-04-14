// import logo from './logo.svg';
import React,{useReducer , useState} from 'react';
import './App.css';
// import React, {useState} from "react";

const formReducer = (state, event) => {
  return{
    ...state, 
    [event.name]: [event.value]
  }
}

 

function App () {
  const [formData, setFormData] = useReducer (formReducer , {})
  const [submitting, setSubmitting] = useState (true);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting (true);
    setTimeout (() => {
      setSubmitting (false);
    }, 7000)
   
  
    // alert('You have submitted the form')
  }

  
  const handleChange = (event)  => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  
  return (
    <div className='App'>
     
      <div className='Main'>
      <h1>Profile Form</h1>
      <form onSubmit={handleSubmit}>
        {/* <fieldset> */}
          <label>
            <div className = 'label'>First Name:</div> 
            <input type = 'text' name='name'  onChange={handleChange} />
          </label>
         
           <p></p>
          <label>
            <div className = 'label'>Last Name:</div> 
            <input type = 'text'  name='lastname' onChange={handleChange}/>
          </label>
        
          <p></p>
          <label>
            <div className = 'label'> Email:</div>
            <input type = 'text' name='email' onChange={handleChange} />
          </label>
         
          <p></p>
          <label>
            <div className = 'label' > Gender:</div>
            <select name="Gender" onChange={handleChange}>
                  <option value="">Please Select</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                
              </select>
            </label>
          

           <p></p>
          <label>
            <div className = 'label'> Address:</div>
            <input  type = 'text' name='address' onChange={handleChange} />
          </label>
          

           <p></p>
          <label>
            <div className = 'label'>Bio:</div> 
            <textarea name='desc' onChange={handleChange}/>

           
          </label>
          
        {/* </fieldset> */}
        <p></p>
        <button type='submit'>Submit</button>
      </form>
      

      </div>
     
      <div className='Info'>
        
      {submitting &&
        <div>You just submitted this:
          <ul>
          {Object.entries(formData).map(([name, value,desc,lastname,email]) => (
             <li key={name}><strong>{name}</strong>:  {value.toString()}</li>
           ))}
          </ul>
        </div>

      }
     
      </div>
    </div>
  )
}

export default App;

// const Header = () => {
//   const [statement, setStatement] = useState (0)

//   const setStatementBegger = () => {
//      setStatement(statement + 1)
//   }

//   return(
//     <div>
//       <h1>{statement}</h1>
//       <button onClick={setStatementBegger}>like</button>
//     </div>
  
//   )
 
// }

// export default Header;


// class Header extends Component {
//   constructor (props){
//     super(props)
//     this.state = {
//      likeCount : 0
//     }
//   }

//   setStateBegger = () =>{
//     this.setState({
//       likeCount: this.state.likeCount + 1
//     })
//   }

//   render(){
//     return (
//       <div>
//         <h1>{this.state.likeCount}</h1>
//         <button onClick={this.setStateBegger}>like</button>
//       </div>
//     );
//   }
    
// }


// export default Header;