import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Play from "./pages/Play";
import Admin from "./pages/Admin";

function App() {
	return (
		<div className="p-6 min-h-screen flex items-center justify-between flex-col">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="play" element={<Play />} />
                <Route path="admin" element={<Admin />} />
			</Routes>
		</div>
	);
}

export default App;
