
import './App.css';
import { Button, Form, FormGroup,Label,Input}
from 'reactstrap';

import {CovidLoginPage} from 'react-social-login-buttons';

function App() {
  return (
    <Form className="login-form">
     <h1 className = "text-center">
       MyCovin.com</h1>
     <h2 className = "text-center">LOGIN</h2>
     <FormGroup>
       <Label>Email</Label>
       <Input type="email" placeholder="email"/>
       <Label>Password</Label>
       <Input type="password" placeholder="password"/>
       <Button className="btn-lg btn-dark btn-block">Log In</Button>
     </FormGroup>

    </Form>
  );
}

export default App;
