import { TwitterFollowCard } from "./TwitterFollowCard";

export function App () {
    const formatUserName = (userName) => `@${userName}`;
    return (
        <section className="App">
        <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="FaztCode" 
        name="Ruben Douglas" />
        <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="midudev" 
        name="Miguel Angel" />
        <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="ElonMusk" 
        name="Elon Musk" />
        </section>
    )
}