import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { Icons } from "../styles";

library.add(faWhatsapp, faFacebook);

export default function FontAwesomeIconSet() {
  return <Icons>
    <FontAwesomeIcon icon={faWhatsapp} size="2x" />    
    <FontAwesomeIcon icon={faFacebook} size="2x" />    
  </Icons>
}

