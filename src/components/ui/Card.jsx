import { FaCheck } from 'react-icons/fa'
import Button from './Button'

const Card = ({
    name = '', 
    pricediscount = '0',
    price = '0', 
    currency = 'Rp',
    features = [],
    featured = false,
}) => {
  return (
    <div className={`bg-white border border-[#C0993A] rounded-sm shadow-xl  relative  ${
      featured ? "border-2" : "border-opacity-10"
    }`}>

      {
        featured ? (
          <span className='bg-[#C0993A] text-white px-6 py-1 rounded-full uppercase text-sm font-semibold whitespace-nowrap absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tracking-widest'>
          TerPopuler
          </span>
        ) : null}

      <div className='px-6 py-12 border-b-2 border-gray-200'>
        <div className="text-3xl font-semibold text-center mb-4">
          {name}
        </div>

        <div className='flex justify-center items-center'>
          <div className='flex items-end line-through'>
            <p className='text-lg'>{currency} {pricediscount}</p>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <div className='flex items-end'>
            <p className='text-3xl font-medium mr-1'>{currency}</p>
            <p className='text-5xl font-bold'> {price}</p>
          </div>
        </div>
      </div>

      <div className='px-10 py-12 bg-gray-100'>
        <ul className='space-y-3'>
          {features.map((feature, index) => (
            <li key={index} className='flex items-center space-x-4'>
              <FaCheck className='text-lg text-[#C0993A] flex-shrink-0'/>
              <p className='text-gray-600 text-base lg:text-lg'>{feature}</p>
            </li>
          ))}
        </ul>

        <Button id="order-sekarang" title="Order Sekarang"  containerClass='mt-12 w-full py-4 text-sm sm:text-base'/>
      </div>
    </div>
  )
}

export default Card