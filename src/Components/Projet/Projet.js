import { useEffect } from "react";
import "./style.css";

const Projet = ({projects}) => {

    useEffect(() => {

    }, [])
    

    return (
        <div className="projet">
            <div className="container">
                {
                    projects.projects.map((data, index) => {
                        if (data.isActive) {
                            return (
                                <div className="item-card" key={index}>
                                    <p>{data.name}</p>
                                    {/* {
                                        data.images.map((val, id) => (<img src={'./images/header/' + val} alt={data.name} width={50} />))
                                    } */}
                                    <img src={'./images/header/' + data.images[0]} alt={data.name} width={50} />
                                    <p>{data.description}</p>
                                    { data.skills.map((res, key) => { return(<span key={key}>{res} </span>) }) }
                                    <p>{data.description}</p>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
}

export default Projet;