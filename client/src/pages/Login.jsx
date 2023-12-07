import { useEffect, useState } from "react";
import { Button, Form, Input , message , Spin } from "antd";
import "../resources/authentication.css";
import {Link , useNavigate} from "react-router-dom";
import axios from 'axios'

function Login() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate() 
  const onFinish = async (values) => {
    setLoading(true)
    try {
      const user = await axios.post('http://localhost:5000/api/user/login', values);
      message.success('Login successfull')
      localStorage.setItem('cvgenerator-user',JSON.stringify(user.data))
      setLoading(false)
      navigate('/home')
    } catch (error) {
      setLoading(true)
  message.error('Login failed. Check the console for details.')
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
        <h1>Sign In</h1>
        <hr />
        <Form.Item name='username' label='Username'>
          <Input />
        </Form.Item>
        <Form.Item name='password' label='Password'>
          <Input type='password' />
        </Form.Item>
        <div className='d-flex align-items-center justify-content-center '>
          <Link to='/register'>Click here to sign up</Link>
          <Button type='primary' htmlType='submit'>
            Sign In
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
