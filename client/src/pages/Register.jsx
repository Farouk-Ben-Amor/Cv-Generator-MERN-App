import { useState , useEffect } from 'react';

import { Button, Form, Input, message, Spin } from "antd";
import '../resources/authentication.css'
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios'


function Register() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const onFinish = async (values) => {
    setLoading(true)
    try {
      await axios.post('http://localhost:5000/api/user/register', values);
      setLoading(false)
      message.success('Registration successfull')
    } catch (error) {
      setLoading(false)
      console.error(error)
  message.error('Registration failed. Check the console for details.')
    }
  };
  useEffect( ()=>{
    if (localStorage.getItem("cvgenerator-user")) {
      navigate('/home')
    }
  } )
  return (
    <div className='auth-parent'>
      { loading && (<Spin  size="large" />) }
      <Form layout='vertical' onFinish={onFinish}>
        <h1>Sign Up</h1>
        <hr />
        <Form.Item name='username' label='Username'>
          <Input />
        </Form.Item>
        <Form.Item name='password' label='Password'>
          <Input type='password' />
        </Form.Item>
        <Form.Item name='cpassword' label='Confirm password'>
          <Input type='password' />
        </Form.Item>
        <div className="d-flex align-items-center justify-content-center ">
          <Link to='/login' >Click here to sign in</Link>
        <Button type='primary' htmlType='submit'>
          Sign Up
        </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;