import Card from "./ui/Card"

const plans = [
  {
    name : 'Basic', 
    pricediscount : '200.000',
    price : '100.000', 
    currency : 'Rp',
    featured : false,
    features : [
      'Tes',
      'Tes',
      'Tes',
    ]
  },
  {
    name : 'grand', 
    pricediscount : '200.000',
    price : '200.000', 
    currency : 'Rp',
    featured : true,
    features : [
      'Tes',
      'Tes',
      'Tes',
    ]
  },
  {
    name : 'master', 
    pricediscount : '200.000',
    price : '300.000', 
    currency : 'Rp',    
    featured : false,
    features : [
      'Tes',
      'Tes',
      'Tes',
    ]
  },
]

const Pricing = () => {
  return (
    <section id='pricing' className='h-full py-24 w-screen bg-gray-100 relative'>
      <div className="container mx-auto w-[90%] lg:w-[85%] 2xl:w-[70%] z-20 relative">
        <div className='text-center text-3xl font-bold'>
          Pilihan Paket Harga
        </div>
        <div className='text-base text-gray-700 text-center mt-3 max-w-lg mx-auto'>
          Pilih paket terbaik sesuai kebutuhan undangan digitalmu.        
        </div>

        <div className='mt-16'>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-0 ">
            {plans.map(plan => (
              <div className={`w-full mx-auto ${
                plan.featured ? "order-first lg:order-none lg:scale-110 lg:transform lg:z-10" : "lg:transform lg:scale-90"
              }`}>
                <Card {...plan}/>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Pricing