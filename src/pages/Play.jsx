import { useEffect, useRef, useState } from "react";
import { getName, buzz } from "../Data";

const Play = () => {
    const [ name, setName ] = useState("");
    const [ status, setStatus ] = useState();
    const last = useRef(Date.now() - 1500);

    useEffect(() => {
        getName().then(name => setName(name));
    }, [])
    
    async function handleBuzz() {
        let now = Date.now();
        // Prevent button spam
        if(now - last.current < 2000) return;
        last.current = now;
        
        let response = await buzz();
        if(response.data.success) {
            setStatus(true);
        } else {
            setStatus(false);
        }
    }

    return (
        <div className="space-y-4 text-center">
            <h1 className="text-2xl font-semibold">Welcome, { name }, to Family Feud!</h1>
            <p>Press the big red button below when you have an answer.</p>
            {
                (() => {
                    if(status !== undefined) {
                        if(status) return <p className="text-green-500">You got it!</p>
                        else return <p className="text-red-400">Aww! You didn't get it...</p>
                    }
                })()
            }
            <div className="flex justify-center">
                <button onClick={ handleBuzz }
                className="bg-red-500 w-40 h-40 rounded-full
                text-white text-2xl font-semibold">
                    Buzz
                </button>
            </div>
        </div>
    )
}

export default Play;