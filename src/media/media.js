import './media.css'
import { Provider } from 'react-redux'
import store from './store';
import UserList from './components/usersList'
export default function Media(){
    return (
    <Provider store={store}>
        <div className='container mx-auto'><UserList /></div>
    </Provider>);
} 