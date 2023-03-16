//  import PropType from 'prop-types'
import classnames from 'classnames'
import {GoSync} from 'react-icons/go'
const Button = ({ children, rounded, outlined, primary, secondary, danger, success, warning, loading, ...rest }) => {
   const classValues = classnames(rest.className,'flex items-center px-3 py-1.5 m-2 border ', {
      'opacity-80' : loading ,
      'border-blue-900 bg-blue-500 text-white': primary  && !outlined,
      'border-gray-900 bg-gray-900 text-white': secondary && !outlined,
      'border-red-500 bg-red-500 text-white': danger && !outlined,
      'border-green-500 bg-green-500 text-white': success && !outlined,
      'border-yellow-400 bg-yellow-400 text-white': warning && !outlined
   },
      {
         'rounded-full': rounded,
         'bg-white': outlined,
         'text-blue-500 border-blue-500': outlined && primary,
         'text-gray-900 border-gray-900': outlined && secondary,
         'text-red-500 border-red-500': outlined && danger,
         'text-green-500 border-green-500': outlined && success,
         'text-yellow-400 border-yellow-500': outlined && warning
      })
   return <button  {...rest} disabled={loading} className={classValues}>
      {loading && <GoSync className='animate-spin' />}
      {!loading && children}
      </button>
}

Button.propTypes = {
   checkValidationValue: ({ primary, secondary, danger, success, warning }) => {
      const rest = { primary, secondary, danger, success, warning };
      const btn = ['primary', 'secondary', 'danger', 'success', 'warning']
      const count = Object.keys(rest).reduce((accumulator, key) => {
         return accumulator + Number(!!rest[key]) + Number(!(btn.includes(key)))
      }, 0)
      if (count > 1) {
         throw new Error(`Choose one from the List [${btn}]`)
      }
   }
}

export default Button;