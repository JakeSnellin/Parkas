import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export function Header (props){

    return(
        <div>
            <div>
                <a href='#' target="_blank"><FontAwesomeIcon icon={ faTwitter }/></a>
                <a href='#' target="_blank"><FontAwesomeIcon icon={ faInstagram }/></a>
                <a href='#' target="_blank"><FontAwesomeIcon icon={ faFacebook }/></a>
            </div>
            <div className='logo-container' style={{backgroundImage: `url(${props.logo})`}}></div>
        </div>
    )
}