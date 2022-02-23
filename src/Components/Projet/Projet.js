import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import addUserDB from "../../services/add-user-request.service";
import getUsersDB from "../../services/get-users-request.service";
import "./style.css";

const Projet = ({projects}) => {
    const dispatch = useDispatch();

    const { auth } = useSelector(state => {
        return {
            auth: state.authReducer.user,
        }
    })

    useEffect(() => {
        // addUserDB("user_01", "Raul", "raul3wa@gmail.com", "logo.png");
        // dispatch(getUsersDB());
        // console.log(auth);

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