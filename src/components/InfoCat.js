import { Link } from 'react-router-dom'
import './InfoCat.scss'
import backButton from './back-button.png';

export default function InfoCat(props) {
    return (
        <div style={{ display: 'flex', justifyContent: "center" }}>
            <div className='infocat'>
                <h2>{props.cat.breedName} ({props.cat.breedType})</h2>
                <h3>Color: {props.cat.furColor}</h3>
                <p>{props.cat.breedDescription}</p>
                <div className='divImage'><img src={props.cat.imgThumb} /><br /></div>
                <div className="back-button"><Link to='/'><img src={backButton} alt="Back"/></Link></div>
            </div>
        </div>
    )
}