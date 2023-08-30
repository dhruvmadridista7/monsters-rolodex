import Card from "../card/card.component";
import './card-list.styles.css';


const CardList = ({ monsters }) => (

    <div className="card-list">
        {
            monsters.map((monster) => {
                return <Card key={monster.id} monster={monster} />;
            })
        }
    </div>
);


export default CardList;






















// using class components;

// import { Component } from "react";
// import Card from "../card/card.component";

// import './card-list.styles.css';

// class CardList extends Component {
//     render() {
//         // console.log(this.props);
//         // console.log(this.props.monsters);
//         // console.log('render from cardList');
//         const { monsters } = this.props;
 
//         return(
//             <div className="card-list">
//                 {/* <h1>I am cardList component</h1> */}
//                 {
//                     monsters.map((monster) => {
//                         // const { name, id, email } = monster;
//                         return <Card monster={monster} />;
//                         // return (
//                         //     <div className="card-container" key={id}>
//                         //         <img 
//                         //             alt={`monster ${name}`}
//                         //             src={`https://robohash.org/${id}?set=set2`}
//                         //         />
//                         //         <h1>{name}</h1>
//                         //         <p>{email}</p>
//                         //     </div>
//                         // )
//                     })
//                 }
//             </div>
//         );
//     }
// }


// export default CardList;

/*
Whenevr this.props change out componet re-render

Component re-render based on two conditions :
1. when setState get called 
2. and When props are updated
*/