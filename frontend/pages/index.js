import { TextField } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import { serverGetRequest } from "@/util/axios";

export default function Home() {
  // useEffect(() => {
  //   async function fetchMatches() {
  //     const result = await axios.get("http://127.0.0.1:1337/api/matches");
  //   }
  //   fetchMatches();
  // }, []);

  return (
    <Container fluid>
      <Row>
        <Col>Faceit Tracker</Col>
        <TextField />
      </Row>
    </Container>
  );
}

export const getServerSideProps = async (context) => {
  const { jwt } = context.req.cookies;
  console.log(jwt);

  if (!jwt) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  const matches = await serverGetRequest("matches", jwt);
  console.log(matches.data.data);

  return { props: {} };
};
