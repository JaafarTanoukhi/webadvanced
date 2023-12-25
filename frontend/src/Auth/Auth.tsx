import { useEffect, useState } from "react";
import BackgroundImage from "../../assets/imgs/LoginPageBackground.jpg";
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
      <div className="h-screen">
        <img src={BackgroundImage} className="z-0 absolute h-auto min-w-full"></img>
        <div className="z-10 h-full relative flex justify-center items-center">
          {element}
        </div>
      </div>
    </>
  );
}
