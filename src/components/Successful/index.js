import React from 'react'
import { withRouter} from 'react-router-dom'

import './styles.scss'

export const Successful =  withRouter( (props) => {
    React.useEffect( ()=> {
        setTimeout( ()=> {props.history.push('/')}, 3000)
    }, [])

    return (
        <div className="center Success">
            <i className="material-icons large">check</i>
            <h6>Your purchase has been successful</h6>
        </div>
    )

})
