import React from 'react'
import data from '../info'

function Main() {

    return (<>
        <div className="header_div">

            <h1>Top NetFlix Series</h1>

        </div>
        <div className="content_div">

            {
                data.map((ele, ind) => {
                    return (<>
                        <div className="items" >
                            <div className="item_div" >
                                <div className="image_div">
                                    <img src={ele.photo} alt="hello" />
                                </div>
                                <h2>{ele.name}</h2>
                                <div className="info">
                                    <p> {ele.information}</p>
                                </div>
                                <div className="btn_div">
                                    <a href={ele.movieLink} target="_blank">Visit</a>
                                </div>
                            </div>
                        </div>



                    </>)

                })
            }
        </div>
    </>
    )
}

export default Main

