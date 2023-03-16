import classNames from "classnames";
export default function Skeleton({ className, times }) {
    const outerClassName = classNames(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5',
        className
    );
    const innerClassName = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0', // it will cover the outter div
        '-translate-x-full', // translate in negative direction
        'bg-gradient-to-r', // Change the colors from right hand 
        'from-gray-200',
        'via-white',
        'to-gray-200'

    );
    const boxes = Array(times).fill(0).map((_, i) => {
        return <div className={outerClassName} key={i} >
            <div className={innerClassName} />
        </div>
    })

    return boxes;
}