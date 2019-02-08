import React from 'react';
import { NavLink} from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li>
                <NavLink to='/сreate'>New Project</NavLink>
            </li>
            <li>
                <NavLink to='/'>Log Out</NavLink>
            </li>
            <li>
                <NavLink to='/' className='btn btn-floating indigo darken-1'>
                    NN
                </NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks;