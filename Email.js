 import React from 'react';
import OtpInput from 'react-otp-input';
import {observer} from 'mobx-react';

class Email extends React.Component{
    constructor(){
    super()
    this.state={
        otp:""
    }
    this.handleChange = this.handleChange.bind(this)
    }
    handleChange(value){
        this.setState({
              otp:value
        })
        console.log(value)
       
    }
    render(){
        return(
            <div className="primarymail font otp ">
                <header> 
                    <h1  >Enter your OTP</h1>
                    <p  > For your security. We need to verify your mail id. Eter the 5 digit otp sent to name@gmail.com</p>
                </header>
                <div className="otpbox"> 
                <p><b>Enter your OTP</b> </p> 
             <OtpInput     
             onChange={this.handleChange} numInputs={6} separator={<span>-</span>} value={this.state.otp}/>

             </div>
            </div>
        )
    }

}

export default observer(Email);
 
   
