import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PresentMe = () => {
    return (
        <div className="present-me">
            <div className="container">

                <div className="grid-2_md-1">
                    <div className="col-6_md-12">
                        <div className="item-card">
                            <FontAwesomeIcon icon="fas fa-user" color='red' />
                            <h2>Salut, je suis <span>Delianu Raul</span></h2>

                            <p className="small-presentations">
                                Développeur, concepteur et intégrateur d'applications web et mobile à Drancy, France.
                            </p>
                            
                            <div class="info">
                                <FontAwesomeIcon icon="fas fa-user" />
                                <span>Web designer &amp; developer</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-6_md-12">
                        <div className="item-card">
                            <img src="./images/header/me.jpg" alt="Personal Portfolio" width={100} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PresentMe;