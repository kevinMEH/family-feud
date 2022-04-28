import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postUsername, postPassword, verfUser, verfAdmin } from "../Data";

const Login = () => {
    const [admin, setAdmin] = useState(false);
    const [success, setSuccess] = useState(true);
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    
    const navigate = useNavigate();
    
    useEffect(() => {
        (async () => {
            if(await verfUser()) {
                navigate("/play");
            }
            if(await verfAdmin()) {
                navigate("/admin");
            }
        })();
    }, [])
    
    async function handleSubmit() {
        if(!admin) {
            let success = await postUsername(username);
            if(success) navigate("/play");
        } else {
            let success = await postPassword(password);
            if(success) navigate("/admin");
            else setSuccess(false);
        }
    }

    return (
        <div className="space-y-6 pt-24 pb-32">
            <h1 className="text-2xl font-bold">Login:</h1>
            <div className="space-y-3">
                <label htmlFor="password" className="block">{ admin ? "Enter admin password:" : "Guest Username:" }</label>
                { admin ?
                    <>
                    { !success ? <p className="text-red-500 text-sm leading-tight">Wrong password.</p> : <></> }
                    <input type="password" name="password" placeholder="password" size={30} required
                    value={password} onChange={ event => setPassword(event.target.value) }
                    className="block border-[1.5px] border-slate-400 py-1.5 px-3 rounded-md" />
                    </>
                :
                    <input type="text" name="username" placeholder="Kevin" size={30} required
                    value={username} onChange={ event => setUsername(event.target.value) }
                    className="block border-[1.5px] border-slate-400 py-1.5 px-3 rounded-md" />
                }
                <button onClick={ handleSubmit }
                className="bg-slate-500 text-white rounded-md px-4 py-2">
                    Enter Family Feud!
                </button>
            </div>
            
            <div>
                <input type="checkbox" name="admin" checked={admin} onChange={ () => setAdmin(!admin) } />
                <label htmlFor="admin" className="ml-2">Login as admin</label>
            </div>
        </div>
    )
}

export default Login;