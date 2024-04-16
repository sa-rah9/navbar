import React from 'react'

const Navmobile = () => {
  
  return (
   <>
    <div className={`fixed top-0 transform transition-all duration-500 z-[10000] left-0 ring-0 bottom-0 bg-black opacity-70 w-[60%] h[100vh]`}>Navmobile</div>
   
    <ul className={`text-white fixed flex items-center flex-col justify-center h-[100%] transition-all duration-300 delay-300 w-[60%] bg-red-600 space-y-14 z-[10006]`}>
    </ul>
        <li>  < a href='#' > Home     </a>  </li>
        <li>  < a href='#' > About     </a>  </li>
        <li>  < a href='#' > Services  </a>  </li>
        <li>  < a href='#' > Blog      </a>  </li>
        <li>  < a href='#' > Contacts  </a>  </li>
        </>
      
    
  )
}
export default Navmobile