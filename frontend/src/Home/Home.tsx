import Feed from "./Feed";
import Nav from "../shared/Nav";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Account from "../Account/Account";
import Collection from "../Collection/Collection";
import Page404 from "../shared/Page404";

export default function Home() {
    const { page } = useParams();
    const [element, setElement] = useState<JSX.Element | null>(null);
  
    useEffect(() => {
      switch (page?.toLowerCase()) {
        case "feed": setElement(<Feed></Feed>);break;
        case "collection":setElement(<Collection></Collection>);break;
        case "account":setElement(<Account></Account>);break;
        default:setElement(<Page404></Page404>);
      }
    }, [page]);
  
    return (
        <>
            <div className="w-full h-full m-0 p-0 bg-slate-50">
                <Nav></Nav>
                {element}
            </div>
        </>
    )
}

