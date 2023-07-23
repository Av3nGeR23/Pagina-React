
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contacto from "./Contacto";
import ArmadoPC from "./ArmadoPC";
import Game from "./Game";
import BuscadorPokemon from "./BuscadorPokemon";
import Footer from "./Footer";


function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />}/>
                <Route path="About" element={<About />}/>
                <Route path="Contacto" element={<Contacto />}/>
                <Route path="ArmadoPC" element={<ArmadoPC />}/>
                <Route path="Game" element={<Game />}/>
                <Route path="BuscadorPokemon" element={<BuscadorPokemon />}/>
                </Route>
            </Routes>
            <Footer />
        </div>
    )

}
export default App;