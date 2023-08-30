import './card.styles.css';

const Card = ({ monster }) => {

    const { id, name, email } = monster;
    return (
        <div className="card-container">
            <img 
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2`}
            />
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    )
}

export default Card;




// import { Component } from "react";

// import './card.styles.css';

// class Card extends Component {
//     render() {
//         const { id, name, email } = this.props.monster;
//         return (
//             <div className="card-container">
//                 <img 
//                     alt={`monster ${name}`}
//                     src={`https://robohash.org/${id}?set=set2`}
//                 />
//                 <h1>{name}</h1>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }

// export default Card;