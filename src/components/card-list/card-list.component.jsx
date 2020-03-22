import React from 'react';
import {Card} from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {    
    return <div className="card-list">
     {
          props.heroes.map(hero =>
            <Card monster={hero} key = {hero.id}></Card>
          )
        }
</div>
}