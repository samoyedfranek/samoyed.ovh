import Terminal from "../components/terminal";

function App() {
    return (
        <div className="h-screen w-screen bg-neutral-900 p-2.5">
            <div className="h-full w-full bg-terminal rounded-xl shadow-2xl overflow-hidden">
                <Terminal />
            </div>
        </div>
    );
}
export default App;
