import React from 'react';
import { Form, Input, Checkbox, Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {observer} from 'mobx-react';
import FormItem from 'antd/lib/form/FormItem';
 

const props = {
    name: 'file',
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

class Company extends React.Component{

    constructor(){
    super()
    this.state ={
        company_name:"",
        email:"",
        job_title:"",
        experience:"",
        terms:false
    }
    this.handleCompanyChange = this.handleCompanyChange.bind(this)
    this.handleEmailChange= this.handleEmailChange.bind(this)
    this.handleJobChange= this.handleJobChange.bind(this)
    this.handleExperienceChange= this.handleExperienceChange.bind(this)
    this.handleTermsChange= this.handleTermsChange.bind(this)
    }
    handleCompanyChange(events){
      this.setState({
        company_name:events.target.value
      })
      console.log(events.target.value)
      this.props.store.company_name = events.target.value
      }
      handleEmailChange(events){
        this.setState({
              email:events.target.value
        })
        console.log(events.target.value)
        this.props.store.email = events.target.value
        }
        handleJobChange(events){
          this.setState({
                job_title:events.target.value
          })
          console.log(events.target.value)
          this.props.store.job_title = events.target.value
          }
          handleExperienceChange(events){
            this.setState({
                  experience:events.target.value
            })
            console.log(events.target.value)
            this.props.store.experience = events.target.value
            }
            handleTermsChange(events){
              this.setState({
                    terms:events.target.value
              })
              console.log(events.target.value)
              this.props.store.terms = events.target.value
              }
    render(){
        return(
            <div className="primary font"> 
            <Form onFinish ={this.Finish}>
              <header>
               <h1>  Add your company details</h1>
               <p><b>lorem epsum is a empty text</b> </p>
              </header>
            <Upload className="label" {...props}>
            <Button icon={<UploadOutlined />}>Upload your company logo</Button>
            </Upload><br/>
            <Form.Item className="label" name="company_name" onChange = {this.props.handleCompanyChange} value = {this.state.company_name} label="Company Name">
            <Input className="input"/>
            </Form.Item>
            <Form.Item className="label" name="email" onChange = {this.props.handleEmailChange} value = {this.state.email} label="Email">
            <Input className="input"/>
            </Form.Item>
            <Form.Item className="label" name="job_title" onChange = {this.props.handleJobChange} value = {this.state.job_title} label="Job Title">
            <Input className="input"/>
            </Form.Item>
            <Form.Item className="label" name="experience" onChange = {this.props.handleExperienceChange} value = {this.state.experience} label="Years of Experience">
            <Input className="input"/>
            </Form.Item>
            <Form.Item>
            <Checkbox className="labeltwo" name="terms" onChange={this.props.handleTermsChange}>I accept the terms and conditions</Checkbox>
            </Form.Item>
            </Form>
            </div>
        )
    }

}

export default observer(Company);
