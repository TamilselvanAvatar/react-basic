import "./bulma.css";
import "./style.css";
import MoviePlaylist from "./components/MoviePlayList";
import SongPlaylist from "./components/SongPlayList";
import { Provider, useDispatch } from 'react-redux'
import {reset} from './store/actions'
import { store  } from './store'



function State() {

    const dispatch = useDispatch()

    const handleResetClick = () => {
        dispatch(reset())
    };

    return (
        <div className="container is-fluid">
            <button onClick={() => handleResetClick()} className="button is-danger">
                Reset Both Playlists
            </button>
            <hr />
            <MoviePlaylist />
            <hr />
            <SongPlaylist />
        </div>
    );
}

const stateWithStore = () => {
    return <Provider store={store}>
        <State />
    </Provider>
}

export default stateWithStore