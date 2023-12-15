import { Link } from 'react-router-dom'
import './Cat.scss'

export default function Cat(props) {
    return (
        <div title={props.cat.breedName} className='cat'>
            <h3 className='title'>
                <Link to='CatPage' state={{ data: props.cat.id }}><img src={props.cat.imgThumb}></img></Link>
                <p>{props.cat.breedName}</p>
            </h3>
        </div>
    )
}