import React from "react";
const Animal = React.lazy(() => import("./animals/Animals"));
const Book = React.lazy(() => import("./books/Books"));
const BookRefactor = React.lazy(() => import("./books-refactor/Books"));
const Routing = React.lazy(() => import("./rounting/routing"));
const StateManagement = React.lazy(() => import("./state-management/state"));
const Cars = React.lazy(() => import("./cars/cars"));
const Media = React.lazy(() => import("./media/media.js"));
const project = [
  {
    name: "Animal",
    component: <Animal />,
    description: {
      Aim: `Render the 'Animal' images`,
      Using: `'useSate' Hook and props`,
      Learn: `General concept of JSX, State, Rerender of functional component`,
      Default :""
    },
  },
  {
    name: "Book",
    component: <Book />,
    description:{
        Aim : `Props communication and some familiariation with axios`,
        Using : `Using Hook, Props, Axios`,
        Learn : `Importance of Spliting the logic as 'Components'`,
        Default : `Introduced - fake-json server , add a 'run script' in package.json
        Create a book.json act as DB`
    } 

  },
  {
    name: "Book Refactor",
    component: <BookRefactor />,
    description: {
        Aim : `Props communication and some familiariation with axios`,
        Using : `Instead of Props, used - 'useContext' Hook`,
        Learn : `Access of state without props (in central management)`,
        Default : ""
    }
  },
  {
    name: "Routing",
    component: <Routing />,
    description:{
        Aim : `Route through different component`,
        Using : `Created custom Route and Link component without using library`,
        Learn : `Custom resusable hook and component`,
        Default : "Introducing of 'useReducer'"
    } 
  },
  {
    name: "State Management",
    component: <StateManagement />,
    description: {
        Aim : `Managing State `,
        Using : `Using Redux toolkit`,
        Learn : `Slice -> Action Creators -> Store -> Provider`,
        Default : ""
    } 
  },
  {
    name: "Cars",
    component: <Cars />,
    description: {
        Aim : `Add, Fetch, Remove cars with combined components `,
        Using : `Using Redux toolkit`,
        Learn : `Slice -> Action Creators -> Reducer -> Store -> Provider`,
        Default : ""
    } ,
  },
  {
    name: "Media",
    component: <Media />,
    description: {
        Aim : `Add, Fetch, Remove cars with combined components `,
        Using : `Using Redux toolkit, createAsynThunk, createApi `,
        Learn : `Query -> Tag system - for re-request`,
        Default : ""
    } ,
  },
];

export default project;
