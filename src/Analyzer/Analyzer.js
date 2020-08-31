import React, { Component } from "react";
import { FileUploaderButton } from "carbon-components-react";
import Rank from '../Rank/Rank'



class Analyzer extends Component {

    constructor(props){
        super(props);
        this.state = {
            usuarios: []
        }
        this.processar = this.processar.bind(this)
    }

    processar(event){

        function transformWhatsDataBR(data){
            let dataSplit = data.split(" ")[0].split("/")
            if(dataSplit.length != 3) return "Invalid Date"
            return new Date(`${dataSplit[2]}-${dataSplit[1]}-${dataSplit[0]}`)
        }

        var fr = new FileReader(); 
        fr.onload = () =>{
            var lines = fr.result.split(/[\r\n]+/g);
        
            var usuarios = {}
            var usuarioAtual = ''
            var dataAtual = ''
            var texto = ''

            for (let i = 0; i < lines.length; i++) {
                var line = lines[i];
                let separacao = line.split(" - ")
                let data = transformWhatsDataBR(separacao[0])
                // console.log(Object.prototype.toString.call(data));
                if(separacao.length == 1 || data.toString() == "Invalid Date"){
                    //Usuário pulou linha, considerar usuário da ultima mensagem
                    texto = line
                    console.log(separacao);
                    console.log(data);
                }else{
                    line = separacao[1]
                    //Nova linha detectada. Separa usuário do texto
                    dataAtual = data
                    separacao = line.split(":")
                    if(separacao.length == 1){
                        continue; // Nesse caso é algum aviso do sistema!
                    }
                    usuarioAtual = separacao[0]
                    texto = separacao[1]
                }
                
                // if(usuarioAtual == '') console.log(texto);
                if(!usuarios[usuarioAtual]){
                    //criando espaço para usuário atual, caso ainda não exista
                    usuarios[usuarioAtual] = {
                        registros: [],
                        totalMensagens: 0,
                        totalPalavras: 0 
                    }
                }

                usuarios[usuarioAtual].registros.push({
                    data: dataAtual,
                    totalPalavras: texto.split(" ").length
                })
                usuarios[usuarioAtual].totalPalavras += texto.split(" ").length
                usuarios[usuarioAtual].totalMensagens += 1
                

            }

            let usuariosArray = []
            for (const key in usuarios) {
                let usuario = usuarios[key]
                usuario.nome = key
                usuariosArray.push(usuario)
            }

            usuariosArray = usuariosArray.sort(function(pessoaA, pessoaB){
                return pessoaB.totalMensagens - pessoaA.totalMensagens
            })
            console.log(usuariosArray);

            this.setState({usuarios: usuariosArray})

        }
        fr.readAsText(event.target.files[0])
        


        
    }

    render(){
        return(
            <div>
                <FileUploaderButton labelText="Incluir Arquivo" onChange={this.processar}/>
                <Rank lista={this.state.usuarios}/>
            </div>
        )
    }

}

export default Analyzer