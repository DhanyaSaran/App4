
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
let check=false

export default class Form extends React.Component
{

constructor()
{
    super()
    this.state={
        alldetails:[],
        pageno:0
    }
}

    componentDidMount(){
       
       //this.getDetails()
       
       }

    
       async getDetails(){

        
        this.timer =     setInterval(()=>
        fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${this.state.pageno}`,{method: "GET"})
         .then((response) => response.json())
         .then((responseData) =>
         {
           //set your data here
            console.log(responseData);
            console.log(this.timer)
           //check=true
           this.setState({
            pageno:this.state.pageno+1
        })
         }
         )
         .catch((error) => {
             console.error(error);
         }), 1000)

       
       
       }



render()
{
    return(
        <View>

        </View>
    )
}

}


  