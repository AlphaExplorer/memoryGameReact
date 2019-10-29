import React, {Component} from 'react';
import Card from '../../components/Card/index';
import {randomizeArray, showMessage} from '../../utils/utils'

class Game extends Component
{
    cards=[
        {
        id:"sunglasses", 
        image:"https://i.pinimg.com/originals/f6/8f/05/f68f054a0b7f5a3148e9f7c505ef1e1b.png"
        },
        {
        id:"wink", 
        image:"https://i.pinimg.com/564x/34/8c/2c/348c2cd0c2bb092e495dc0afb81cb854.jpg"
        },
        {
        id:"teary", 
        image:"https://i.pinimg.com/564x/35/93/9a/35939a3c17f484ac0934f43be0e23ca8.jpg"
        },
        {
        id:"hands", 
        image:"https://i.pinimg.com/564x/4a/57/2f/4a572f02356a81f776b3402ff7b903b2.jpg"
        },
        {
        id:"nerd", 
        image:"https://i.pinimg.com/564x/97/21/69/9721692edf1a8d8158f1f0a38aac8705.jpg"
        },
        {
        id:"happy", 
        image:"https://i.pinimg.com/564x/ba/fc/10/bafc108eec3575947153dac36ae58206.jpg"
        }
    ]

    constructor(props)
    {
        super(props);
        this.state={
            cards:this.cards, 
            clickedCards:[], 
            score:0, 
            hihestScore:0
        }
    }



    cardClicked=(card)=>{
        if (this.state.clickedCards.includes(card.id))
        {
            // alert("you lose");
            showMessage("You Lose!!")
            this.setState({
                clickedCards:[], 
                score:0,
                cards:randomizeArray(this.state.cards)
            });
        } else if(this.state.clickedCards.length+1===this.state.cards.length)
        {
            showMessage("You Win!!")
            this.setState({
                clickedCards:[], 
                score:0,
                hihestScore:this.state.cards.length,
                cards:randomizeArray(this.state.cards)
            });
        }
        else
        {
            // alert("you win")
            this.setState({
                cards:randomizeArray(this.state.cards),
                clickedCards:[...this.state.clickedCards, card.id], score:this.state.score+1, 
                hihestScore:Math.max(this.state.score+1, this.state.hihestScore)})
        }
    }
    render()
    {
        return <div>
            <h1>Clicky Game</h1>
            <div className="col-6">
                <h2>Your Score: {this.state.score}</h2>
                <h2>Your Highest Score: {this.state.hihestScore}</h2>

            </div>
            <div className="row">
            {this.cards.map((card, index)=><Card key={index} onClick={()=>this.cardClicked(card)}image={card.image}/>)}
            </div>
        </div>
    }
}

export default Game;