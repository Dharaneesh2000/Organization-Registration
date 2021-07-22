import React from 'react';
import { Form, Input, Button, Select,Radio} from 'antd';
import "./App.css";
import {observer} from 'mobx-react';
const { Option } = Select;

const countries = ['India','America','Mexico']
const countryData = {
    India: ['Tamil Nadu', 'Kerala', 'Myanmar'],
    America: ['San Fransisco', 'California', 'New York'],
    Mexico: ['Sonora','Puebla','Durango']
  };

const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select defaultValue = "+91" style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="">+1</Option>
      </Select>
    </Form.Item>
  );

class Personal extends React.Component{

constructor(){
    
    super()
    this.state ={
        full_name:" ",
        gender:"male",
        country:"India",
        state:"Tamil Nadu",
        mobile:"",
        country_code:""
    }
    this.handleGenderChange = this.handleGenderChange.bind(this)
    this.handlecountryChange = this.handlecountryChange.bind(this)
    this.handlestateChange = this.handlestateChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleMobileChange = this.handleMobileChange.bind(this) 
    }
    handleNameChange(events){
    console.log("hello")
    this.setState({
            full_name:events.target.value
    })
    console.log(events.target.value)
    this.props.store.full_name = events.target.value
    }
    handleGenderChange(events){
      this.setState({
             gender:events.target.value     
      })
      this.props.store.gender = events.target.value 
    }
    handleCountryCodeChange(value){
      this.setState({
             country_code:value     
      })
      this.props.store.country_code = value
    }
    handleMobileChange(events){
      this.setState({
             mobile:events.target.value     
      })
      this.props.store.mobile = events.target.value
    }
    handlecountryChange(value){
        console.log(value)
        this.setState({
                    country:value,
                    state:countryData[value][0]
        })
        this.props.store.country = value
    }
    handlestateChange(value){
        this.setState({
            state:value
        })
        console.log(this.state.state)
        this.props.store.state = value
    }
    render(){
        return(
          <div className="primary font"  >
        <Form  onFinish = {this.Finish}>
          <header>
            <h1>Add your Personal details</h1>
            <p><b>lorem epsum is a empty text</b> </p>
          </header>
        <Form.Item className="label"  name="full_name" onChange = {this.handleNameChange} value = {this.state.full_name} label="Full Name">
        <Input className="input" />
        </Form.Item>
        <Form.Item label="Gender" className="label"> 
           
        <Radio.Group   name="gender" className="input" >
          <Radio.Button onChange = {this.handleGenderChange} value="male"  >Male</Radio.Button>
          <Radio.Button onChange = {this.handleGenderChange} value="female">Female</Radio.Button>
          <Radio.Button onChange = {this.handleGenderChange} value="others">Others</Radio.Button>
        </Radio.Group>
        </Form.Item>
        <Form.Item   label= "Country" className="label">
        <Select className="input" key = "country" defaultValue={countries[0]} style={{ width: 120 }} onChange={this.handlecountryChange}>
        {countries.map(country => (
          <Option  key={country}>{country}</Option>
        ))}
      </Select>
        </Form.Item>
        <Form.Item   label= "State" className="label" >
        <Select className="input" style={{ width: 120 }} value={this.state.state} onChange={this.handlestateChange}>
        {countryData[this.state.country].map(state => (
          <Option   key={state}>{state}</Option>
        ))}
        </Select>
        </Form.Item>
        <Form.Item
        name="phone"
        className="label"
        type="number"
        label="Phone Number"
        onChange = {this.handleMobileChange}
        >
        <Input className="input" addonBefore={prefixSelector} style={{ width: '50%' }} />
        </Form.Item>
        </Form>
        </div>
        )
    }

}

export default observer(Personal);