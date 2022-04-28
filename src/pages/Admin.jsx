import { useEffect, useRef, useState } from "react";
import { openAdminConnection } from "../Data";

const Admin = () => {
    const [ presser, setPresser ] = useState("");
    const websocketWrapper = useRef(openAdminConnection());

    useEffect(() => {
        websocketWrapper.current.onopen = () => {
            console.log("opened");
            websocketWrapper.current.send("Init");
        }
        websocketWrapper.current.onmessage = event => {
            setPresser(event.data);
        };
    }, []);

    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-semibold">Hello Admin!</h1>
            <p className="leading-tight">The person who pressed is...</p>
            <h1 className="text-3xl font-semibold text-green-500">{ presser }!</h1>
        </div>
    )
}

export default Admin;