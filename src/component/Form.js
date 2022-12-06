import React from 'react';

function Form(){
    return <div className = "content-wrap" style={{marginLeft:"600px", color:"red"}}>
                <h1>Fill the form</h1>
                <form>
                    <input type="text" name="name" placeholder="Enter your name"></input><br /><br />
                    <input type="number" name="name" placeholder="Mobile number"></input><br /><br />
                    <button type="submit">Submit</button>
                </form>
               
            </div>
}
export default Form;
