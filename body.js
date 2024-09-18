import React, { useState } from 'react'
import axios from 'axios';
// import './body.css';
export default function Body() {
    const [collection, setCollection] = useState([]);
    const [text, setText] = useState('');



    const gen_image = async () => {
        try {
            const response = await axios.get(`https://api.unsplash.com/search/collections?page=1&query=${text}&client_id=PiL5SjjYGa1uaUSNMWYO9lFcPdhJoCNO2drcNethAE0`)
            // console.log(response.data.results);
            // console.log(response.data);
            setCollection(response.data.results)

        }
        catch (error) {
            console.log('Something is wrong with the API');
        }
    }
    const handleOnChange = (event) => {
        // console.log(event.target);
        setText(event.target.value);

    }
    return (
        <>
            <div className="container">

                <h2 className="my-3" style={{ color: "white" }}>AI Image Generator</h2>
                <p className="text-size-16 text-weight-400 lh-copy text-align-center text-medium mb40" style={{ color: "white" }}> 142 inspirational designs, illustrations, and graphic elements from the world’s best designers.
                    Want more inspiration? Browse our search results...</p>
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col">
                        <input className="form-control me-5 ms-5" type="search" aria-label="Search" value={text} onChange={handleOnChange} placeholder="Enter the word to generate image" />
                        <br />
                        {/* button */}
                        <button className="btn btn-success" type="submit" onClick={gen_image}>Search</button>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>

            <>
                <div className="container my-3">
                    {collection.map((data) => {
                        // console.log(data, 46);
                     return(
                            <>
                                {/* <h1>{data.links.photos}</h1> */}
                                <img src={data.cover_photo.urls.small} style={{ border: "2px solid black", margin: "5px", height: "300px", width: "300px" }} alt="image not found" />
                            </>
                        )

                    })}
                </div>

            </>
        </>
    )
}