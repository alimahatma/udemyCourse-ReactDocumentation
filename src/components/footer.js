import React, { Component } from "react";
import {CtxConsumer}  from '../index';

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

    
    render() {
        // const animals = ['cat','dog','horse']

        return (
            <CtxConsumer>
                {(context) => (
                    <div>
                            { context.animals.map( animal => {
                                return (
                                    <div key={ animal }>
                                        <h1>{ animal }</h1>
                                    </div>
                                    );
                                }) }
                    </div>
                )
            }
            </CtxConsumer>
        )
    }

}

export default Footer;