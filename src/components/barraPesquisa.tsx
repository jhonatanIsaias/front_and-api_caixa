import React from 'react'
import '~/components/barraPesquisa.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
const barraPesquisa = () => {
  return (
    <div className='container'>
        <button><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#3d5872",}} /></button>
    </div>
  )
}

export default barraPesquisa