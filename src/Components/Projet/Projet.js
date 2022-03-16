import "./style.css";

const Projet = ({projects}) => {
    const actualiser = () => {
        console.log(projects);
    }
    
    return (
        <div className="projet">
            <div className="container">
                <div className="items">
                    {
                        projects.map((data, index) => {
                            if (data.isActive) {
                                return (
                                    <div className="item-card" key={index}>
                                        <p>{data.name}</p>
                                        <p>{data.category}</p>
                                        { (data.images && data.images.length > 0) && <img src={data.images[0].data_url} alt={data.name} width={100} /> }
                                        <p>{data.description}</p>
                                        <p>{data.skills}</p>
                                    </div>
                                )
                            }
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