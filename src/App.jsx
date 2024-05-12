//En App se van renderizando los elementos.
import TwitterFollowCard from "./components/TwitterFollowCard";

const App = () => (
    <section className="App">
    <TwitterFollowCard userName="dianavodopivec" name="Diana Vodopivec"/>
    <TwitterFollowCard userName="matiasecharri" name="Matias Echarri"/>
    <TwitterFollowCard userName="pachupacha" name="Gabriel García"/> 
    </section>
);

export default App 

