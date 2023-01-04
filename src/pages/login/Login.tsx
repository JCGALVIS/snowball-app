import React from "react";
import { Card, Title } from "../../components";
import { GmailButton } from "../../components/gmail-button/Gmail-button";

const Login = () => {
  return (
    <Card>
      <Card.Header>
        <Title position="tc" value="app.login-title" />
      </Card.Header>
      <Card.Body>
        <GmailButton />
      </Card.Body>
    </Card>
  );
};

export default Login;
