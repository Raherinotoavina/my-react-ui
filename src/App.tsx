import Ui from "@/modules/UI/Ui";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route element={<Ui />} path="/ui" />
        </Routes>
    );
}

export default App;
