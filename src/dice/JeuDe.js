import React from "react";
export default class JeuDe extends React.Component {
    constructor(props) {
    super(props);
    this.state = { face: 0, compteur: 0, fin: false };
    }
    jouer() {
        const valeur = Math.floor(Math.random() * 6) + 1;
        this.setState({ face:valeur, compteur: this.state.compteur+1});
        if(valeur==this.props.cache){
            
            this.setState({ fin: true})
        }
    }
    
    getImage() {
        let photo=[
            '../../JeuDe/images/vide.png',
            '../../JeuDe/images/face1.png',
            '../../JeuDe/images/face2.png',
            '../../JeuDe/images/face3.png',
            '../../JeuDe/images/face4.png',
            '../../JeuDe/images/face5.png',
            '../../JeuDe/images/face6.png'];
            
        return(            
            
            photo[this.state.face]
        )
    }
    initialiser(){
        this.setState({ face:0, compteur: 0, fin: false });
    }
    render() {
        const styleImage = { width: "60px", height: "60px" };
        return (
        <div>
            <img src='../../JeuDe/images/Dé.png' />
            <h1>Jeu de Dé</h1>
            <h2>face:{this.state.face}</h2>
            <h3 style={{color:"red"}}>Le nombre que vous devez trouver est {this.props.cache}</h3>
            <img src={this.getImage()} style={styleImage} />
            <h2>nombre d'essais:{this.state.compteur}</h2>
            {!this.state.fin?<button onClick={() => this.jouer()}>jouer</button>
            :<div>
                <p>Bravo vous avez trouvez la face cachée</p>
            <button onClick={() => this.initialiser()}>Initialiser</button>
            </div>
            }
            

        </div>
    );
}
}