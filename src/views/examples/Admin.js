import React, { Component } from 'react';

class AdminPage extends Component {

    constructor(props) {
        super(props);
        if (!localStorage.getItem('token')) {
            window.location.href = '/login-page';
        }
        this.state = {
            // Initially, no file is selected
            selectedFile: null,
            title: null,
            author: null,
            link: null
        };
        this.onRender()
    }

    onRender = () => {

        const url = 'https://app.kvery.io/query/api/117eb160de1/userdata'

        // post body data
        const data = {
            token: localStorage.getItem('token')
        }

        // create request object
        const request = new Request(url, {
            method: 'POST',
            body: JSON.stringify(data),
            // headers: new Headers({
            //   'Content-Type': 'application/json'
            // })
        })

        // pass request object to `fetch()`
        fetch(request)
            .then(res => res.json())
            .then(res => {
                if (res.status == 1 && res.response[0].isAdmin == 1) {
                    res = res.response[0]
                    this.setState({ mail: res.email })
                    this.setState({ password: res.password })
                    this.setState({ username: res.username })
                    this.setState({ user_image_url: res.user_image_url })
                    this.setState({ user_image_url: res.isAdmin })
                }
                else {
                    alert("You are not an Admin!");
                    window.location.href = '/login-page';
                }
            })
    };


    // On file select (from the pop up)
    onFileChange = event => {

        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
    };

    authorChange(author) {
        console.log(author)
        this.setState({ author: author })
    }

    titleChange(title) {
        console.log(title)
        this.setState({ title: title })
    }

    linkChange(link) {
        console.log(link)
        this.setState({ link: link })
    }



    // On file upload (click the upload button)
    onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();

        formData.append("title", this.state.title)
        formData.append("author", this.state.author)
        formData.append("link", this.state.link)

        // Update the formData object
        formData.append(
            "file",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        // Details of the uploaded file
        console.log(this.state.selectedFile);

        // Request made to the backend api
        // Send formData object
        fetch(`https://app.kvery.io/query/api/117eb160de1/article-upload`, {

            method: 'POST',
            body: formData

        });
    };

    // File content to be displayed after
    // file upload is complete
    fileData = () => {

        if (this.state.selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>

                    <p>File Type: {this.state.selectedFile.type}</p>

                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>

                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    render() {

        return (
            <div>
                <h1>
                    Upload Article
                </h1>
                <div >
                    <form action="/files" method="POST">
                        <div>
                            <div><label for="author">Author:</label>
                                <input type="text" name="author" placeholder='author of the article...' onChange={event => this.authorChange(event.target.value)} ></input>
                            </div>
                            <label for="title">Title:</label>
                            <textarea name="title" placeholder='title of the article...' cols="30" rows="5" onChange={event => this.titleChange(event.target.value)}></textarea>
                            <div><label for="link">Link:</label>
                                <input type="text" name="link" placeholder='insert link here' onChange={event => this.linkChange(event.target.value)} ></input>
                            </div>

                        </div>
                    </form>
                    <input type="file" onChange={this.onFileChange} />
                    <button className='btn btn-danger'
                        onClick={this.onFileUpload}>
                        Upload!
                    </button>
                </div>
                {this.fileData()}
            </div>
        );
    }
}

export default AdminPage;