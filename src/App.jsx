//En App se van renderizando los elementos.
import TwitterFollowCard from "./components/TwitterFollowCard";
const addAt = (name) => `@${name}`

const App = () => (
    <section className="App">
    <TwitterFollowCard format={addAt} isFollowing={false} userName="dianavodopivec" name="Diana Vodopivec"/>
    <TwitterFollowCard format={addAt} isFollowing userName="matiasecharri" name="Matias Echarri"/>
    <TwitterFollowCard format={addAt} isFollowing userName="pachupacha" name="Gabriel García"/> 
    </section>
);

export default App 

