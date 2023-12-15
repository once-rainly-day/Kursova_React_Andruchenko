import Cat from './Cat'
import './Cats.scss'

export default function Cats(props) {
    return (
        <div>
            <div className="cats">
                {
                    props.cats.map((cat, index) =>
                        <Cat cat={cat} index={index} />
                    )
                }
            </div>
        </div>
    )
}