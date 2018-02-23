import React from 'react';
import {Link} from 'react-router-dom';

const Component=({match})=>{console.log(match); return <div><Link to='/'>back to home</Link></div>}
export default Component;