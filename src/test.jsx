import * as React from 'react'
import {render} from 'react-dom'
import img from './beethoven2und5.jpg'
let Greet = () => <h1>!!!</h1>

const thisEnv = 'env' === 'prod'&&'good'
console.log(render(<Greet />,document.getElementById('app')),thisEnv,img)
