import './bulma.css'
import './style.css'
import { CarForm } from './components/carForm'
import { CarList } from './components/carList'
import { CarSearch } from './components/carSearch'
import { CarValue } from './components/carValue'
import { Provider } from 'react-redux'
import store from './store'
export default function cars() {
    return <Provider store={store}>
        <div className = "container fluid">
            <CarForm />
            <CarSearch />
            <CarList />
            <CarValue />
        </div>
    </Provider>
}