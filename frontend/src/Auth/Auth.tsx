import { useEffect, useState } from "react";
import BackgroundImage from "../../assets/imgs/LoginPageBackground.webp";
import Login from "./Login";
import { useParams } from "react-router-dom";
import Register from "./Register";
import ForgetPassword from "./ForgetPassword";
import Page404 from "../shared/Page404";

export default function Auth() {
  const { page } = useParams();
  const [element, setElement] = useState<JSX.Element | null>(null);

  useEffect(() => {
    switch (page?.toLowerCase()) {
      case "login": setElement(<Login></Login>);break;
      case "register":setElement(<Register></Register>);break;
      case "forgetpassword":setElement(<ForgetPassword></ForgetPassword>);break;
      default:setElement(<Page404></Page404>);
    }
  }, [page]);

  return (
    <>
        <img src={BackgroundImage} className="z-0 absolute w-screen h-screen object-cover"></img>
        <div className="z-10 h-screen relative flex justify-center items-center">
          {element}
        </div>
    </>
  );
}
