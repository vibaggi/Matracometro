import React, { Component } from "react";
import { FileUploaderButton } from "carbon-components-react";
import { LineChart } from "@carbon/charts-react";
import Rank from '../Rank/Rank'
import ImgExportarConv from './../assets/exportar-conversa.png'
import ImgSemDocs from './../assets/sem-documentos.png'
import './Analyzer.scss'
import About from "../About/About";


class Analyzer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuarios: [],
            dataChart: [],

        }
        this.processar = this.processar.bind(this)
    }

    optionsChart = {
        "title": "Variação de mensagens por tempo",
        "axes": {
            "bottom": {
                "title": "Periodo",
                "mapsTo": "key",
                "scaleType": "labels"
            },
            "left": {
                "mapsTo": "value",
                "title": "Mensagens",
                "scaleType": "linear"
            }
        },
        "height": "400px",
    }



    processar(event) {

        function transformWhatsDataBR(data) {
            let dataSplit = data.split(" ")[0].split("/")
            if (dataSplit.length != 3) return "Invalid Date"
            return new Date(`${dataSplit[2]}-${dataSplit[1]}-${dataSplit[0]}`)
        }

        var fr = new FileReader();
        fr.onload = () => {
            var lines = fr.result.split(/[\r\n]+/g);

            var usuarios = {}
            var usuarioAtual = ''
            var dataAtual
            var texto = ''

            for (let i = 0; i < lines.length; i++) {
                var line = lines[i];
                let separacao = line.split(" - ")
                let data = transformWhatsDataBR(separacao[0])
                // console.log(Object.prototype.toString.call(data));
                if (separacao.length == 1 || data.toString() == "Invalid Date") {
                    //Usuário pulou linha, considerar usuário da ultima mensagem
                    texto = line
                    console.log(separacao);
                    console.log(data);
                } else {
                    line = separacao[1]
                    //Nova linha detectada. Separa usuário do texto
                    dataAtual = data
                    separacao = line.split(":")
                    if (separacao.length == 1) {
                        continue; // Nesse caso é algum aviso do sistema!
                    }
                    usuarioAtual = separacao.slice(0)[0]
                    texto = separacao.join("")
                }

                // if(usuarioAtual == '') console.log(texto);
                if (!usuarios[usuarioAtual]) {
                    //criando espaço para usuário atual, caso ainda não exista
                    usuarios[usuarioAtual] = {
                        contagens: {},
                        totalMensagens: 0,
                        totalPalavras: 0
                    }
                }
                let stringData = (dataAtual.getUTCMonth() + 1) + "/" + dataAtual.getUTCFullYear()
                if (!usuarios[usuarioAtual].contagens[stringData]) {
                    usuarios[usuarioAtual].contagens[stringData] = {
                        totalPalavras: 0,
                        totalMensagens: 0
                    }
                }
                usuarios[usuarioAtual].contagens[stringData].totalPalavras += texto.split(" ").length
                usuarios[usuarioAtual].contagens[stringData].totalMensagens += 1
                usuarios[usuarioAtual].totalPalavras += texto.split(" ").length
                usuarios[usuarioAtual].totalMensagens += 1

            }

            let usuariosArray = []
            let dataChart = []
            for (const key in usuarios) {
                let usuario = usuarios[key]
                usuario.nome = key
                usuariosArray.push(usuario)

                for (const data in usuario.contagens) {
                    dataChart.push({
                        "group": usuario.nome,
                        "key": data,
                        "value": usuario.contagens[data].totalMensagens
                    })
                }
            }

            usuariosArray = usuariosArray.sort(function (pessoaA, pessoaB) {
                return pessoaB.totalMensagens - pessoaA.totalMensagens
            })
            console.log(usuariosArray);
            console.log(dataChart);
            this.setState({ dataChart: dataChart })
            this.setState({ usuarios: usuariosArray })

        }
        fr.readAsText(event.target.files[0])




    }

    render() {
        return (
            <div class="analyzer-container">
                {
                    this.state.dataChart.length == 0 ?
                        <div class="bx--grid">
                            <div class="bx--row">
                                <div className="bx--col-lg-16">
                                    <h1 className="landing-page__heading"> Instruções </h1>
                                </div>
                            </div>
                            <div class="bx--row">
                                <div class="bx--col-lg-2 bx--col-md-2 bx--col-sm-1 img">
                                    <img src={ImgExportarConv} />
                                </div>
                                <div class="bx--col-lg-14 bx--col-md-6 bx--col-sm-3 text">
                                    Usando o Whatsapp pelo celular, entre em um grupo,
                                    vá em opções de uma conversa e procure por 'Exportar Conversa'.
                        </div>
                            </div>
                            <div class="bx--row">
                                <div class="bx--col-lg-2 bx--col-md-2 bx--col-sm-1 ">
                                    <img src={ImgSemDocs} />
                                </div>
                                <div class="bx--col-lg-14 bx--col-md-6 bx--col-sm-3 text">
                                    Baixe o arquivo sem midia inclusa. Será gerado um arquivo.txt.
                                    Faça download no seu celular, ou envie para seu computador.
                        </div>
                            </div>
                            <div class="bx--row">
                                <div class="bx--col">
                                    Agora no botão abaixo, inclua o arquivo e aguarde. Em instantes sua conversa será analisada!
                        </div>
                            </div>
                            <div class="bx--row">

                            </div>
                        </div>
                        : ''
                }

                <FileUploaderButton labelText="Incluir Arquivo" onChange={this.processar} />
                {this.state.usuarios.length > 0 ? <Rank lista={this.state.usuarios} /> : ''}

                {this.state.dataChart.length > 0 ? <LineChart data={this.state.dataChart} options={this.optionsChart}> </LineChart> : ''}

            </div>


        )
    }

}

export default Analyzer