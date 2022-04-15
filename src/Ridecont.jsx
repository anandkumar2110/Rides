import React from 'react' ;

const getDis = (user_id,path) => {
    let low = 0 , high = path.length-1 ;

    while(low<=high)
    {
        let mid = Math.floor((low+high)/2) ;
        
        if(path[mid] == user_id)
            return  0 ;

        if(path[mid] > user_id)
            high = mid-1 ;

        else
            low = mid+1 ;
    }
    
    let x ;
    if(path[path.length -1] < user_id)
        return user_id- path[high] ;
        
    if(path[0] > user_id)
        return path[low] - user_id;
    
    return Math.min(user_id-path[high],path[high+1]-user_id) ;
};



const Ridecont = (props) => {


    return (
        <>
        <div className="box">
            <div className='img-box'>
                <img src='Logo_img.jpeg'/>
            </div>
            <div className='data-box'>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <span>Ride Id:</span> {props.id}
                    </li>
                    <li>
                        <span>Origin Station:</span> {props.origin} 
                    </li>
                    <li>
                    <span>Station_path:</span> [
                        {props.path.map((elem) => {
                            return(
                                <>
                                    {elem},            
                                </>
                            );
                        })}
                        ]
                    </li>
                    <li>
                        <span>Date:</span> {props.date}
                    </li>
                    <li>
                        <span>Distance:</span> {getDis(props.dis,props.path)}
                    </li>
                </ul>
            </div> 
            <div className='location-box'>
                <div className="city-name">
                    {props.city}
                </div>
                <div className="state-name">
                    {props.st}
                </div> 
            </div>     
        </div>
        </>
    );
}

export default Ridecont ;