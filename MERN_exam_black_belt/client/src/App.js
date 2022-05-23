import logo from "./logo.svg";
import "./App.css";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import AllPets from "./components/AllPets";
import OnePet from "./components/OnePet";
import CreatePet from "./components/CreatePet";
import EditPet from "./components/EditPet";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <h1>Pet Shelter</h1>
                <Switch>
                    <Route exact path={"/"}>
                        <AllPets/>
                    </Route>

                    <Route exact path={"/new"}>
                        <CreatePet/>
                    </Route>

                    <Route exact path="/pet/:_id">
                        <OnePet/>
                    </Route>

                    <Route exact path={"/pet/edit/:_id"}>
                        <EditPet/>
                    </Route>

                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
