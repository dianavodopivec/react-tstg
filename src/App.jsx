//En App se van renderizando los elementos.
import TwitterFollowCard from "./components/TwitterFollowCard";
const addAt = (name) => `@${name}`
const kevinPowell = {format: addAt, userName: "kevin-powell", name: "Kevin Powell", isFollowing: true}

const App = () => (
    <section className="App">
    <TwitterFollowCard format={addAt} isFollowing={false} userName="dianavodopivec" name="Diana Vodopivec"/>
    <TwitterFollowCard format={addAt} isFollowing userName="matiasecharri" name="Matias Echarri"/>
    <TwitterFollowCard format={addAt} isFollowing userName="jonmircha" name="Jonathan Children">
        <p className="small">Hola! Soy tu amigo y docente digital ...</p>
    </TwitterFollowCard>
    <TwitterFollowCard {...kevinPowell}/>
    <TwitterFollowCard format={addAt} isFollowing userName="pachupacha" name="Gabriel García"/> 
    </section>
);

export default App 

//Cuando utilizar un Children o no -> Depende de como uno quiera hacer la interfaz del usuario. Si queres seguir agregando elementos, deberias usar un children.