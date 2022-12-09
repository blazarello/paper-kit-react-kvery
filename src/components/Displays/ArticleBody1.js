import React from "react";

class ArticleBody1 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list:[]
        }
        
        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }
    async callAPI() {
        //fetch data from API
        // fetch("http://localhost:8000/testapi")
        // .then(
        //     (response) => response.json()
        // ).then((data) => {
        //     console.log(data)
        //     data = await response;
        //     this.setState({
        //         list:data.data
        //     })
        // }) 

        const response = await fetch(`http://localhost:8000/testapi`);
        const json = await response.json();
        this.setState({ list: json });
    }
    
    render() {

        let tb_data = this.state.list?.map((item)=>{
            return(
                
                <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr>
            )
        })
        return(
            <div className="container">
                    
                    <tbody>
                        {tb_data[2]}
                    </tbody>
            </div>
        )
    }
}

export default ArticleBody1;