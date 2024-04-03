import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Login = ({setAuthenticate}) => {
  const [ id, setId ] = useState('');
  const [ password, setPassword ] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = (event) => {
    event.preventDefault(); // form태그의 기본 새로고침 이벤트를 무력화시킴
    // setAuthenticate(true);
    console.log(id, password)
    dispatch(authenticateAction.login(id, password))
    navigate('/');
  }
  return (
    <section className='loginWrap'>
      <div>
        <h2>Login</h2>
        <Form name="loginForm" onSubmit={(event) => loginUser(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(event) => setId(event.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  )
}

export default Login