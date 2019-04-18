import React from 'react';

export class AddPokemon extends React.Component {
    render(){
        return (
            <form method="#">
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Type(s)"/>
                <input type="text" placeholder="Attack level"/>
                <input type="text" placeholder="Defense level"/>
                <textarea placeholder="Description"></textarea>
            </form>
        )
    }
}