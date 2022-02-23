import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PresentMe = () => {
    return (
        <div className="present-me">
            <div className="container">

                <div className="grid-2_md-1-spaceBetween">
                    <div className="col-6_md-12">
                        <div className="item-card">
                            <FontAwesomeIcon icon="fas fa-user" className='user-present'  />
                            <h2>Salut, je suis <span>Delianu Raul</span>.</h2>

                            <p className="small-presentations">
                                Développeur, concepteur et intégrateur d'applications web et mobile à Drancy, France.
                            </p>
                            
                            <div className="info">
                                <FontAwesomeIcon icon="fas fa-laptop-code" />
                                <span>Développeur, Concepteur &amp; Intégrateur</span>
                            </div>

                            <div className="info">
                                <FontAwesomeIcon icon="far fa-envelope" />
                                <span>
                                    <a className='shadow' href="mailto:raul3wa@gmail.com">raul3wa@gmail.com</a>
                                </span>
                            </div>
                            
                            <div className="info">
                            <FontAwesomeIcon icon="fas fa-map-marker-alt" />
                                <span>France - Drancy, 93700</span>
                            </div>
                        </div>

                        <div className="item-card">
                            <p className="small-presentations">
                                Télécharger mon CV en version PDF :
                            </p>

                            <a href="./images/header/Raul Delianu.pdf" download={true} className="btn">Télécharger mon CV</a>
                            <a href="" className="btn">Contactez moi</a>
                        </div>
                    </div>

                    <div className="col-5_md-12">
                        <div className="item-card">
                            <a href="./images/header/Raul Delianu.pdf" target="_blank" rel="noopener noreferrer" className='CV'>
                                <img src="./images/header/Raul Delianu.png" alt="Personal Portfolio" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PresentMe;