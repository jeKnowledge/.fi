import React from "react";
import Card from "../../components/Card/Card";
import "./Temas.css"

export default function Temas() {

    return (
        <div className="Temas">
            <div className="grid">
                <div className="theme">
                    <h1>TEMAS</h1>
                </div>
                <div className="grid-logic">
                    <Card
                        id="1"
                        title="CONTROLO DE DESPESAS"
                        text="O Controlo de Despesas é um aspecto crucial da gestão financeira pessoal. Envolve regularmente o registo, a categorização e a análise dos seus hábitos, permitindo assim que faça uma melhor fiscalização pessoal dos seus gastos e despesas."
                    />
                    <Card
                        id="2"
                        title="COMO CONTROLAR O MEU DINHEIRO"
                        text="O Controlo do Dinheiro envolve tomar decisões inteligentes sobre como poupar, investir e gastar o seu dinheiro, bem como fixar e manter um orçamento, acompanhar as suas despesas."
                    />
                    <Card
                        id="3"
                        title="IDEAÇÃO E PSICOLOGIA DE INVESTIMENTOS"
                        text="A ideação de investimentos envolve a apresentação de ideias e estratégias para investir o teu dinheiro de uma forma que se alinhe com os seus objectivos financeiros e tolerância ao risco."
                    />
                    <Card
                        id="4"
                        title="COMO SOBREVIVER AO AUMENTO DA INFLAÇÃO"
                        text="A inflação pode ter um impacto significativo na sua “saúde financeira”. À medida que a taxa de inflação aumenta, o seu dinheiro perde poder de compra, e, consequentemente, precisa de mais dinheiro para comprar as mesmas coisas."
                    />
                    <Card
                        id="5"
                        title="ESTADO DA ARTE DA FINTECH"
                        text="Fintech, também conhecida como tecnologia financeira, é a utilização de tecnologia para melhorar e automatizar serviços financeiros, tais como bancos, pagamentos, empréstimos, e investimentos."
                    />
                </div>
            </div>
        </div>
    )
}