import React from 'react'
const Animal = React.lazy(() => import('./animals/Animals'))
const Book = React.lazy(() => import('./books/Books'))
const BookRefactor = React.lazy(() => import('./books-refactor/Books'))
const Routing = React.lazy(() => import('./rounting/routing'))
const StateManagement = React.lazy(() => import('./state-management/state'))
const Cars = React.lazy(() => import('./cars/cars'))
const Media = React.lazy(() => import('./media/media.js'))
const project = [
    {
        name: "Animal",
        component : <Animal />,
        description: `
    Aim - Render the 'Animal' images <br>
    Using 'useSate' Hook and props <br>
    Learn - General JSX, State, Rerender
    `
    },
    {
        name: "Book",
        component : <Book />,
        description: `
    Aim - Props communication and some familiariation with axios 
    Using Hook, Props, Axios
    Introduced - fake-json server , add a 'run script' in package.json
    Create a book.json act as DB
    Learn - Importance of Spliting the logic as 'Components
    `
    },
    {
        name: "Book Refactor",
        component : <BookRefactor />,
        description: `
    Aim -  same as Book
    Instead of Props, used - 'useContext' Hook
    Learn - Access of state without props (in central management)
    `
    },
    {
        name: "Routing",
        component : <Routing />,
        description: `
    Aim -  Route through different component
    Created custom Route and Link component without using library
    Introducing of 'useReducer'
    Learn - Custom resusable hook and component
    `
    },
    {
        name: "State Management",
        component : <StateManagement />,
        description: `
    Aim -  Managing State 
    Using Redux toolkit  
    Learn - Slice -> Action Creators -> Store -> Provider
    `
    },
    {
        name: "Cars",
        component : <Cars />,
        description: `
    Aim -  Add, Fetch, Remove cars with combined components
    Using Redux toolkit  
    Learn - Slice -> Action Creators -> Reducer -> Store -> Provider
    `
    },
    {
        name: "Media",
        component : <Media />,
        description: `
    Aim -  Add, Fetch, Remove media with combined components
    Using Redux toolkit, createAsynThunk, createApi  
    Learn - Query -> Tag system - for re-request
    `
    },
]

export default project