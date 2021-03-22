import { Component } from 'react';

class LichessPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            userData: null,
            isLoading: false,
            status: ""
        }
    }

    // Working with the Lichess API to export and visualize my personal Chess stats.
    componentDidMount = () => {
        this.setState({isLoading: true});
        
        // enabling cors and authorization token (hidden for now)
        const init = {
            method: 'get',
            headers : {
                'accepts': 'application/json',
                'content-type': 'application/json',
                'Authorization': 'Bearer iNlJZFToiU3wIAao',
                'Access-Control-Allow-Origin':  "https://lichess.org"
            },
            mode: 'cors'
        }

        fetch("/api/account", init)
        .then(res => res.json())
        .then(response => {
            console.log(response);
            this.setState({userData: response, status: response.online, isLoading: false});
           // const isOnline = this.state.userData.online;
            console.log(this.state.status);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render = () => {

        if (this.state.isLoading){
            return (
                <h1>Is Loading...</h1>
            )
        }
        else {
            return (
                <div className="lichess">
                    <h1>Hello World!</h1>
                    <p>{this.state.status}</p> 
                </div>
            )   
        }
    }
}

export default LichessPage;