import React from "react";

class DisplayTable extends React.Component {

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
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>{item.created_at}</td>
                    <td>{item.updated_at}</td>
                    <td>
                        <button className="btn btn-danger">Remove</button>
                    </td>
                </tr>
            )
        })
        return(
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Created_at</th>
                            <th>Update_at</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tb_data}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default DisplayTable;