import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { Icons } from "../styles";

library.add(faWhatsapp, faFacebook, faInstagram);

export default function FontAwesomeIconSet() {
  return <Icons>
    <FontAwesomeIcon icon={faWhatsapp} size="2x" />    
    <FontAwesomeIcon icon={faFacebook} size="2x" />    
    <FontAwesomeIcon icon={faInstagram} size="2x" />    
  </Icons>
}

