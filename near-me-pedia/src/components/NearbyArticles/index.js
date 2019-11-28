import React from 'react';
import { Text, View, Button } from 'react-native';

class NearbyLocationsScreen extends React.Component{

    JsonFromApi = (gscoord1, gscoord2) => {
        
        var url = "https://en.wikipedia.org/w/api.php"; 
        var params = {
            action: "query",
            list: "geosearch",
            gscoord: gscoord1+"|"+gscoord2,
            gsradius: "10000",
            gslimit: "10",
            format: "json"
        };
        url = url + "?origin=*";
        Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
    
        fetch(url)
            .then(function(response){return response.json();})
            .then(function(response) {
                var pages = response.query.geosearch;
                console.log(pages)
                // for (var place in pages) {
                //     console.log(pages[place].title);
                // }
            })
            .catch(function(error){console.log(error);});
            
    }
    
    assignJson = (Json) =>{
    //add json to redux store
    this.props.dispatch({type: 'ASSIGN_ARTICLES', Json})
    }

    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Json" onPress={()=>this.JsonFromApi("37.7891838","-122.4033522")} />
                <Text>Locatiions close to starting point: {this.props.articles} </Text>
                {console.log(this.props.articles)}  
            </View>
        )
    }

}

export default NearbyLocationsScreen