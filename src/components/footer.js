import React, { Component } from "react";

class Footer extends Component {

    //objek properties
    state = {
        name: '', age: 35,
        isLogin: true
    }

    //Objek apabila berhasil masuk kehalaman admin
    componentDidMount() {
        this.setState({ name : 'myName' })
    }

    changed = evt => {
        this.setState({ name : evt.target.value});
        console.log(this.state.name);
    }

    //!Kondisi jika nilai property tidak sesuai
    render() {
        return (
            <div>
                { this.state.isLogin ? (
                    <React.Fragment>
                        <h2 onClick={this.props.myalert}>
                             { this.props.trademark }
                        </h2>
                        <input value={ this.state.name } onChange={ this.changed } type="text "/>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <h2>You can't see this content</h2>
                        <h2>You must Be Login.!</h2>
                    </React.Fragment>
                ) }
            </div>
        )
    }

}

export default Footer;