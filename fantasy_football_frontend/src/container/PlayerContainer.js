import React from 'react'
import Item from '../component/Item'

class PlayerContainer extends React.Component {
    constructor() {
        super()
    }

    comoponentDidMount() {
    }

// iteratingOverCore = (obj) => {
//     console.log('hi')
//     let j = 0
//         for(var i in obj){

//            if(j < 1){
//             j= 2;
//                console.log(j)
//                this.setState({ 
//                    displayNames: obj['displayName']
//                })
//                 console.log(obj['displayName'])

        
//            }
          
// }
    
// }
  


    render() {
        return (
            <>
            {/* {console.log("Player Page" , this.props.core)} */}
                    {this.props.core.displayName.map((name, index) => (
                      <Item key={index} name={name} handleDraft={this.props.handleDraft}/>
                    ))
                }
            </>
        )
    }
    

}

export default PlayerContainer