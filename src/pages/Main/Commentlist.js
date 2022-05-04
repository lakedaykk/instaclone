

import React from 'react';


function Commentlist({comlist}){

    
    const complus = (comlist).map( (e,index)=><li key={index}>{e.username} : {e.comment} </li> 
    
    )



    return(

<div>
{complus}
</div>

        
    )
}

export default Commentlist;



