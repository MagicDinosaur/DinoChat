import { Spin } from "react-cssfx-loading";
function Welcome() {
    return (
        <div >
            <header className="App-header">
                <p>
                    <Spin color ="#b98e8e" />
                </p>
                <h2>
                    Welcome to DinoChat
                </h2>
            </header>
        </div>


    );
}

export default Welcome;
