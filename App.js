import './App.css';
import './style.css'
import './custom.module.css'
import React from 'react'
function App(){
     return(
        <div className="App">
            <h1 className='primary'>Styling 1 in React js</h1>
            <h1 style={{color:'maroon',backgroundColor:'black' }}>Styling 2 in React js</h1>
            <h1 className={style.success} >Styling 3 in React js </h1>
        </div>
    );
}

export default App;