import React, { Component }from 'react'

export class AddEmploy extends Component {

  toggleEmpDisplay = () => {
    this.props.handleToggle()
  }

  handleAdd = (e) => {
    let tempEmploy = {
      firstName: this.refs.inputEmployName.value,
      lastName: this.refs.inputLastName.value
    }//tempEmploy
    e.preventDefault()
    this.props.addEmploy(tempEmploy)
  }//handleAdd

  render() {

    const displayAddBody = {
      display: this.props.bodyVisible ? 'block' : 'none'
    }

    return(
      <div className="panel panel-primary">
        <div className="panel-heading emp-addheading" onClick={this.toggleEmpDisplay}>
        <span className="glyphicon glyphicon-plus"></span> Add New Employee</div>
        <div className="panel-body" style={displayAddBody}>
          <form className="add-employ form-horizontal" onSubmit={this.handleAdd}>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="firstName">First Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control"
                  id="employName" ref="inputEmployName" placeholder="First Name"  required/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="lastName">Last Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control"
                  id="employLastName" ref="inputLastName" placeholder="Last Name" required/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary pull-right">Add Employee</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    ) //return
  } //render
} //AddEmploy
