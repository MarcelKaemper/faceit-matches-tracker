import { postRequest } from "@/util/axios";
import createToast from "@/util/toast";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function LoginForm() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();

  async function sendLogin() {
    const result = await postRequest("auth", {
      username: username,
      password: password,
    });

    if (result.success) {
      createToast("Successfuly signed in", "success");
      router.push("/");
    } else {
      createToast("Sign in failed", "failure");
    }
  }

  return (
    <>
      <Row className="login-form-wrapper d-flex justify-content-center">
        <Col className="login-form mx-auto d-flex justify-content-center flex-column">
          <Row className="mb-3 mx-auto">
            <Col>
              <h3 className="heading">Sign in</h3>
            </Col>
          </Row>
          <Row className="mb-3 mx-auto">
            <Col>
              <TextField
                fullWidth
                label="Username"
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mb-3 mx-auto">
            <Col>
              <TextField
                fullWidth
                label="Password"
                type="password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mb-3 mx-auto">
            <Col>
              <Button fullWidth variant="outlined" onClick={sendLogin}>
                Sign in
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <style jsx global>{`
        .login-form-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100vh;

          .login-form {
            background-color: #2a2828;
            border: 1px solid #2a2828;
            max-height: 300px;
            max-width: 500px;
            border-radius: 20px;
            box-shadow: 8px 1px 15px 5px #000000;

            .heading {
              color: white;
            }

            .MuiTextField-root {
              min-width: 300px;
            }
          }
        }
      `}</style>
    </>
  );
}
