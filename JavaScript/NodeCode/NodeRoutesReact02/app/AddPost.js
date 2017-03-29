import React from 'react';
import 'whatwg-fetch';

export default class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addResultPost: 'Here is the POST result'
        };
        this.getAddPostResult = this.getAddPostResult.bind(this);

    }

    getAddPostResult() {
        const that = this;

        const params = {
            operandA: document.getElementById('operandAPost').value,
            operandB: document.getElementById('operandBPost').value,
        };

        const esc = encodeURIComponent;
        const body = Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');

        const url = '/add-json';
        console.log('SENDING:', body);
        fetch(url, {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: body
        })
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                console.log('parsed json', json);
                that.setState(() => (json));
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });
    }

    render() {
        return (
            <div>

                <h2>Add Number with Post</h2>

                <p>On the server side (server.js), use <strong>request.body</strong> to get the paramters. You must
                    also include <strong>app.use(express.bodyParser());</strong></p>
                <input type='number' id='operandAPost' defaultValue='1'/>
                <input type='number' id='operandBPost' defaultValue='2'/>
                <p id='addResultPost'></p>
                <p>{this.state.addResultPost}</p>
                <button onClick={this.getAddPostResult}>Add Numbers</button>
            </div>
        );
    }
}
