import React from "react";
class Success extends React.Component{
    render(){
        return(
            <div>
                <p>Full Name: {this.props.personal_store.full_name}</p>
            </div>
        )
    }
}

export default Success;