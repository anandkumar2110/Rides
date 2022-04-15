import React,{Component} from 'react' ;
import Ridecont from './Ridecont';

class Nearest extends Component{
  constructor(props){
    super(props) ;
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch('https://assessment.api.vweb.app/rides')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded:true ,
        items: json,
      })
    })
  }


  render(){

    const {isLoaded, items} = this.state ;
    let c,s='Punjab',a ;

    if(!isLoaded){
      return <div>Loading...</div> ;
    }

    else{
      let states = new Map()
      return(
        <>
          <h1>
            {
              items.map((item) => {
              if(states.get(item.state))
              {
                let b = states.get(item.state) ;
                b.push(item.city) ;
                states.set(item.state,b) ;
              }
              else
              {
                states.set(item.state,new Array(item.city)) ;
              }
              return(
                <>
                  <Ridecont id = {item.id} city={item.city} origin={item.origin_station_code} 
                  path = {item.station_path}
                  date = {item.date}
                  st = {item.state}
                  dis = {this.props.origin}/>
                </>
              );
              })
            }
            {
              this.props.ride(items)
            }
          </h1>     
        </>
      );
    }
  }
}

export default Nearest;
