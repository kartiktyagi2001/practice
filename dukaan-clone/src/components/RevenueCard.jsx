
export const RevenueCard = ({
    title,
    amount,
    orderCount 

})=> {
    return(
        <div className="bg-white rounded shadow-md p-4">
            <div className=' text-gray-700 text-sm'>
                <div className= 'flex gap-1 align-center'>
                    <div>
                        {title}
                    </div>

                    <div className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                </div>
             
            </div>

            <div className="flex justify-between pt-2">
                <div className=" text-2xl font-semibold text-gray-900">
                Rs. {amount}
                </div>

                {orderCount ? <div className="flex gap-1   cursor-pointer text-blue-500 text-sm underline">

                    <div className="flex justify-center align-center items-center gap-1">
                        <div >
                            {orderCount} orders
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 justify-center">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>: null}

                
            </div>
        </div>
    )
}