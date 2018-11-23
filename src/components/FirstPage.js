import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class FirstPage extends Component {

    // techclick() {}

    // nontechclick() {}

    render() {
        return(
            <div>
                <h2>Select Team</h2>
                <button
                    type="button"
                    style={{margin:'5px'}}
                    className="btn btn-primary"
                    // onClick = { () => this.techclick()}
                >
                Tech
                    {/* <Link to = {'/app'}
                        style = {{color:'black'}}
                    > Technical 
                    </Link> */}
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    // onClick = { () => this.nontechclick()}
                >
                Non-Tech
                    {/* <Link to = {'/app'}
                        style = {{color:'black'}}
                    > Non-Technical </Link> */}
                </button>
            </div>
        )
    }
}

export default FirstPage;