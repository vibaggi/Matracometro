import React from 'react'
import './Rank.scss'
import goldMedal from './icons/gold-medal.svg'
import silverMedal from './icons/silver-medal.svg'
import bronzeMedal from './icons/bronze-medal.svg'

const rank = (props) =>{
    return(
        <table>
            <tr className="head-container">
                <th>Posição</th>
                <th>Nome</th>
                <th>Mensagens</th>
                <th>Palavras</th>
                <th>P/M</th>
            </tr>
                {props.lista.map((user, index)=>{
                    return(
                        <tr className={ index === 0 || index === 1 || index === 2 ? "rank-top3" : ""}>
                            <td class="rank-position">
                                {index+1}
                                { index === 0 ? <img src={goldMedal} alt=""/> : ''}
                                { index === 1 ? <img src={silverMedal} alt=""></img> : '' }
                                { index === 2 ? <img src={bronzeMedal} alt=""></img> : '' }
                            </td>
                            <td>{user.nome}</td>
                            <td>{user.totalMensagens}</td>
                            <td>{user.totalPalavras}</td>
                            <td>{(user.totalPalavras/user.totalMensagens).toFixed(2)}</td>
                        </tr>
                    )
                })}
        </table>
    )
}

export default rank

