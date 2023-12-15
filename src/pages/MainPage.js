import { useEffect, useState } from "react"
import Cats from "../components/Cats"
import axios from "axios"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function MainPage() {
    const [message, setMessage] = useState('Downloading')
    const [cats, setCats] = useState([])

    useEffect(() => {
        axios.get(
            'https://catbreeddb.p.rapidapi.com/',
            {
                headers: {
                    'X-RapidAPI-Key': '181d91ac62msh4743165e31d5f3dp1a91aajsn6d851817dc2d',
                    'X-RapidAPI-Host': 'catbreeddb.p.rapidapi.com'
                }
            }
        ).then(res => {
            setCats(res.data)
            setMessage(false)
        }).catch(res => {
            setMessage('Download error!')
        })
    }, [])

    return (
        <div>
            <Header />
            {message && <h1>{message}...</h1>}
            {!message &&
                <div>
                    <Cats cats={cats} />
                </div>
            }
            <Footer />
        </div>
    );
}