import React from 'react'
import { withRouter} from 'react-router-dom'

import '../../assets/styles/components/Success.scss'

class Successful extends React.Component {
    constructor() {
        super()
        setTimeout( ()=> {this.props.history.push('/')}, 3000)
    }

    render() {
        return (
            <div className="center Success">
                <i className="material-icons large">check</i>
                <h6>Your purchase has been successful</h6>
            </div>
        )
    }
}

export default withRouter(Successful)