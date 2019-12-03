import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1])
);

const initialChars = [
    {
        name: 'Bunny 1',
        img: 'img/img1.png',
        clicked: false
    },
    {
        name: 'Bunny 2',
        img: 'img/img2.png',
        clicked: false
    },
    {
        name: 'Bunny 3',
        img: 'img/img3.png',
        clicked: false
    },
    {
        name: 'Bunny 4',
        img: 'img/img4.png',
        clicked: false
    },
    {
        name: 'Bunny 5',
        img: 'img/img5.png',
        clicked: false
    },
    {
        name: 'Bunny 6',
        img: 'img/img6.png',
        clicked: false
    },
    {
        name: 'Bunny 7',
        img: 'img/img7.png',
        clicked: false
    },
    {
        name: 'Bunny 8',
        img: 'img/img8.png',
        clicked: false
    },
    {
        name: 'Bunny 9',
        img: 'img/img9.png',
        clicked: false
    },
    {
        name: 'Bunny 10',
        img: 'img/img10.png',
        clicked: false
    },
    {
        name: 'Bunny 11',
        img: 'img/img11.png',
        clicked: false
    },
    {
        name: 'Bunny 12',
        img: 'img/img12.png',
        clicked: false
    },
    {
        name: 'Bunny 13',
        img: 'img/img13.png',
        clicked: false
    },
    {
        name: 'Bunny 14',
        img: 'img/img14.png',
        clicked: false
    },
    {
        name: 'Bunny 15',
        img: 'img/img15.png',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                score: 0
            },
            characters: shuffleArray(initialChars)
        };
    }

    onCharacterClick = (index) => {
        if (!this.state.characters[index].clicked) {
            this.setState({
                characters: shuffleArray(this.state.characters.map((character, current) => {
                    return (current === index) ? { ...character, clicked: true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map(character => { return { ...character, clicked: false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }

    }

    render() {
        return (
            <div className="Board">
                <FadeIn
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Try to click on every NBA Player once. Once you click a player the grid will shuffle.<br />Try not to click the same NBA Player twice or the game will start all over!</h4>
                </FadeIn>
                <FadeIn
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox
                    characters={this.state.characters}
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}