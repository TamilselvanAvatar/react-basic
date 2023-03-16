import { useSelector } from "react-redux"
export const CarValue = () => {
    const totalCost = useSelector(({ car: { cars, searchTerm } }) => {
        return cars
            .filter(car => {
                return car.name.toLowerCase().includes(searchTerm.toLowerCase())
            })
            .reduce((accumulator, car) => {
                return accumulator + car.cost
            }, 0)
    })
    return <div className="car-value">
        Total Cost : ${totalCost}</div>
}