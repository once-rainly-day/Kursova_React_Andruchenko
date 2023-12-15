import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import InfoCat from "../components/InfoCat";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CatPage() {
    const [cat, setCat] = useState()
    const [message, setMessage] = useState('Downloading...')
    const location = useLocation()
    const id = location.state?.data;

    useEffect(() => {
        axios.get(
            'https://catbreeddb.p.rapidapi.com/',
            {
                params: {id: id},
                headers: {
                    'X-RapidAPI-Key': '181d91ac62msh4743165e31d5f3dp1a91aajsn6d851817dc2d',
                    'X-RapidAPI-Host': 'catbreeddb.p.rapidapi.com'
                },
            }
        ).then(res => {
            setCat(res.data[0])
            setMessage(false)
        }).catch(res => {
            setMessage('Error downloading!')
        })
    }, [])

    return (
        <div>
            <Header />
            {message && <h1>{message}</h1>}
            {!message && <div><InfoCat cat={cat} /></div>}
            <Footer />
        </div>
    )

}

