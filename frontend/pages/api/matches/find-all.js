import { serverPostRequest } from "@/util/axios";
import { serialize } from "cookie";

export default async function handler(req, res) {
  // const result = await serverPostRequest("auth/local", {
  //   identifier: req.body.username,
  //   password: req.body.password,
  // });
  // // console.log(result);
  // if (result.success) {
  //   const { jwt } = result.data;
  //   res.setHeader("Set-Cookie", serialize("jwt", jwt, { path: "/" }));
  //   res.status(200).end();
  // }
  // res.status(401).end();
}
