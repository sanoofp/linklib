import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import CodeRounded from "@material-ui/icons/CodeRounded";
import { Icons } from "../styles";
import A from "../../Button/A";

library.add(faWhatsapp, faFacebook, faTwitter);

export default function FontAwesomeIconSet(props) {
  const links = {
    fb: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(props.link)}`,
    wa: `whatsapp://send?text=${encodeURIComponent(props.link)}`,
    tt: `https://twitter.com/intent/tweet/?text=${encodeURIComponent(props.title)}: ${encodeURIComponent(props.link)}`,
    ll: `http://linklibio.herokuapp.com/link/${props.ll}`
  }
  return <Icons>
    <A href={links.wa}><FontAwesomeIcon icon={faWhatsapp} size="2x" /></A> 
    <A href={links.fb}><FontAwesomeIcon icon={faFacebook} size="2x" /></A>
    <A href={links.tt}><FontAwesomeIcon icon={faTwitter} size="2x" /></A> 
    <A href={links.ll}><CodeRounded /></A> 
  </Icons>
}

