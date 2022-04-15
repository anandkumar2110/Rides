import React from 'react' ;
import Ridecont from './Ridecont' ;


let newarr = []

const Past = (props) => {
    let arr = props.ride ;
    let date = new Date(props.day) ;
    // let [curr,setCurr] = useState(newarr) ;
    const getNewarr = async () =>{
        newarr = []
        for(let i=0;i<arr.length;i++)
        {
            let year = parseInt(arr[i].date.substring(6,10)) ;
            if(year > date.getFullYear())
                continue ;
            else if(year < date.getFullYear())
            {
                newarr.push(arr[i]) ;
                continue ;
            }

            let month = parseInt(arr[i].date.substring(0,2)) ;
            if(month > date.getMonth()+1)
                continue ;
            else if(month< date.getMonth()+1)
            {
                newarr.push(arr[i]) ;
                continue ;
            }

            let day = parseInt(arr[i].date.substring(3,5)) ;
            if(day > date.getDate())
                continue ;

            else if(day < date.getDate())
            {
                newarr.push(arr[i]) ;
                continue ;
            } 

            let hrs = parseInt(arr[i].date.substring(11,13)) ;
            let mins = parseInt(arr[i].date.substring(14,16)) ;
            let ampm = arr[i].date.substring(17) ;

            if(ampm == "PM")
            {
                hrs = (hrs+12)%24 ;
            }

            if(hrs > date.getHours())
                continue ;

            else if(hrs < date.getHours())
            {
                newarr.push(arr[i]) ;
            }

            if(mins > date.getMinutes())
                continue ;

            else if(mins < date.getMinutes())
            {
                newarr.push(arr[i]) ;
            }
            // setCurr(newarr) ;
        }
    } ;

    getNewarr() ;
    
    return(
        <>
            <h1>
            {
                console.log(newarr[0])
            }
            {newarr.map((item) => {
                return(
                <>
                  <Ridecont id = {item.id} city={item.city} origin={item.origin_station_code} 
                  path = {item.station_path}
                  date = {item.date}
                  st = {item.state}
                  dis= {props.origin}/>
                </>
              );
              })
            }
          </h1>     
        </>
    );
}

export default Past ;