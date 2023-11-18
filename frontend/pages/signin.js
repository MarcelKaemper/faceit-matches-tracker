import { Container } from "react-bootstrap";
import LoginForm from "@/components/signin/loginform";

export default function Signin() {
  //   useEffect(() => {
  //     async function fetchMatches() {
  //       const result = await axios.get("http://127.0.0.1:1337/api/matches");
  //       console.log(result);
  //     }
  //     fetchMatches();
  //   }, []);

  return (
    <>
      <div className="background-image"></div>
      <Container>
        <LoginForm />
        <style jsx global>{`
          .background-image {
            background-size: cover;
            position: fixed;
            left: 0;
            right: 0;
            z-index: 1;
            display: block;
            background-image: url("static/background.jpg");
            width: 100%;
            height: 100%;
            -webkit-filter: brightness(70%);
            -moz-filter: brightness(70%);
            -o-filter: brightness(70%);
            -ms-filter: brightness(70%);
            filter: brightness(70%);
          }

          .container {
            position: fixed;
            left: 0;
            right: 0;
            z-index: 9999;
          }
        `}</style>
      </Container>
    </>
  );
}
