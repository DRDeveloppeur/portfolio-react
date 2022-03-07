import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProjectsDB from "../../services/get-projets-request.service";
import "./style.css";

const Item = () => {
    const { projects } = useSelector(state => {
        return {
            projects: state.projectsReducer.projects,
        }
    })
    return (
        <>
            {
                projects.map((data, index) => {
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
                                <p>TOTO</p>
                            </div>
                        )
                    }
                })
            }
        </>
    );
}

const Projet = () => {
    const dispatch = useDispatch();
    const [items, setItems] = useState([])
    const { projects } = useSelector(state => {
        return {
            projects: state.projectsReducer.projects,
        }
    })

    useEffect(() => {
        dispatch(getProjectsDB());
        console.log(projects);
    }, [])

    const actualiser = () => {
        console.log(projects);
    }
    
    return (
        <div className="projet">
            <div className="container">
                <div className="items">
                    {
                        projects.map((data, index) => {
                            // if (data.isActive) {
                                return (
                                    <div className="item-card" key={index}>
                                        <p>{data.category}</p>
                                        {/* {
                                            data.images.map((val, id) => (<img src={'./images/header/' + val} alt={data.name} width={50} />))
                                        } */}
                                        <img src={data.images[0].data_url} alt={data.name} width={100} />
                                        <p>{data.description}</p>
                                        {/* { data.skills.map((res, key) => { return(<span key={key}>{res} </span>) }) } */}
                                        <p>{data.skills}</p>
                                    </div>
                                )
                            // }
                        })
                    }
                    <button type="button" className="btn" onClick={actualiser}>
                        Actualiser
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Projet;