import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {notificationAction} from '../../redux/notification/notification.reducer';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';


class SignIn extends React.Component{
    constructor(props){
        super(props)
    

    this.state ={
        email:'',
        password: '',
    }
  
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const { notificationAction } = this.props;
        const{email,password}= this.state;
        
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'',password:''})
            notificationAction('Sign In successfully',5000)
        }
        catch(error){
            notificationAction('Sign In Error',5000)
        }
        
    }

    handleChange = event => {
        const{value,name} = event.target;

        this.setState({[name]:value})
    }



    render(){
        return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    label='Email'
                    handleChange={this.handleChange} required />
                
                <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.password}
                    label='Password'
                    handleChange={this.handleChange} 
                    required />
               
                <div className='buttons'>
                <CustomButton type='submit'>Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{''}Sign in with Google{''}</CustomButton>
                </div>
            </form>
        </div>
        )
    }
}

const mapDispatchToProp = (dispatch) =>({
    notificationAction : (message,time) => dispatch(notificationAction(message,time))
})


export default connect(null,mapDispatchToProp)(SignIn);