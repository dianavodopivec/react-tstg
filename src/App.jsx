//En App se van renderizando los elementos.
import TwitterFollowCard from "./components/TwitterFollowCard";
const addAt = (name) => `@${name}`
const kevinPowell = {format: addAt, userName: "kevin-powell", name: "Kevin Powell"}

const App = () => (
    <section className="App">
    <TwitterFollowCard format={addAt} userName="dianavodopivec" name="Diana Vodopivec"/>
    <TwitterFollowCard format={addAt} userName="matiasecharri" name="Matias Echarri"/>
    <TwitterFollowCard format={addAt} userName="jonmircha" name="Jonathan Children">
        <p className="small">Hola! Soy tu amigo y docente digital ...</p>
    </TwitterFollowCard>
    <TwitterFollowCard {...kevinPowell}/>
    <TwitterFollowCard format={addAt} userName="pachupacha" name="Gabriel García"/> 
    </section>
);

export default App 

