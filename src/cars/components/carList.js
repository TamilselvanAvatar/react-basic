import { useDispatch, useSelector } from "react-redux"
import { removeCar } from "../store";
export const CarList = () =>{

    const {cars , name} = useSelector(({form,car:{cars,searchTerm}})=>{
        //Based on search we just filter the cars list (So no need to delete data)
        const filteredCars =  cars.filter(car=>{
            return car.name.toLowerCase().includes(searchTerm.toLowerCase())         
        })

        return {
            cars : filteredCars,
            name : form.name
        }
    })
    const dispatch = useDispatch()
    console.log(cars);
    const renderList = cars.map(car=>{
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
        return <div className={`panel ${bold && 'bold'}`} key= {car.id}>
            <p>{car.name} - ${car.cost}</p>
            <button onClick={()=>dispatch(removeCar(car.id))} className="button is-danger">Delete</button>
        </div>
    })
    return <div className="car-list panel">{renderList}<hr/></div>
}