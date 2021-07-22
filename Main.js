import React from "react";

import { Steps,Button,message} from 'antd';
import {UserOutlined, SolutionOutlined, FileDoneOutlined} from '@ant-design/icons';
import Personal from "./Personal";
import Company from "./Company";
import Email from "./Email";
import PersonalStore from "./PersonalStore";
const { Step } = Steps;

const contents = [<Personal store={PersonalStore}/>,<Company/>,<Email/>];

class Base extends React.Component{

    constructor(props){
    super(props);
    console.log("Hello")
    this.state = {
        current:0
    }
    }
    next( ){
        this.setState({current:this.state.current+1})
    }
    prev(){
        this.setState({current:this.state.current-1})
    }
render(){
    return(
    <div>
    <br/>
    <Steps size ="small" current={this.state.current}>
    <Step className="icon" title="Personal Details" icon={<UserOutlined/>}></Step>
    <Step className="icon" title="Company Details" icon={<FileDoneOutlined />}/>
    <Step className="icon" title="Email Verification" icon={<SolutionOutlined/>}/>
    </Steps>
    <div>{contents[this.state.current]}</div>
    {this.state.current < contents.length - 1 && (
          <Button className="button" style={{ margin: '0 8px' }} type="primary" onClick={() => this.next()}>
            Next
          </Button>
        )}
        {this.state.current === contents.length - 1 && (
          <Button className="buttondone" style={{ margin: '0 8px' }} type="primary" onClick={() => message.success("Thankyou "+PersonalStore.full_name+".Have a nice day!!")}>
            Done
          </Button>
        )}
        {this.state.current > 0 && (
          <Button  className="buttonprev" style={{ margin: '0 8px' }} type="primary" onClick={() => this.prev()}>
            Previous
          </Button>
        )}
    </div>
    )
}

}
 

export default Base;