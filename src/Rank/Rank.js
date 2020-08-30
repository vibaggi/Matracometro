import React from 'react'
import './Rank.scss'
import goldMedal from './icons/gold-medal.svg'
import silverMedal from './icons/silver-medal.svg'
import bronzeMedal from './icons/bronze-medal.svg'

const rank = (props) =>{
    return(
        <table>
            <tr>
                <th></th>
                <th>Posição</th>
                <th>Nome</th>
                <th>Mensagens</th>
            </tr>
                {props.lista.map((user, index)=>{
                    return(
                        <tr>
                            <td className="icon-column">
                                { index === 0 ? <img src={goldMedal} alt=""/> : ''}
                                { index === 1 ? <img src={silverMedal} alt=""></img> : '' }
                                { index === 2 ? <img src={bronzeMedal} alt=""></img> : '' }
                            </td>
                            <td>{index+1}</td>
                            <td>{user.nome}</td>
                            <td>{user.totalMensagens}</td>
                        </tr>
                    )
                })}
        </table>
    )
}

export default rank

