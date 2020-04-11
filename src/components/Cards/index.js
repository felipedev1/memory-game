import React, { Component } from 'react'
import './style.css'
import Card from './Card'

//logos
import cLogo from '../../assets/c.png'
import cssLogo from '../../assets/css.png'
import htmlLogo from '../../assets/html.png'
import javaLogo from '../../assets/java.png'
import phpLogo from '../../assets/php.png'
import pythonLogo from '../../assets/python.png'
import rLogo from '../../assets/r.png'
import rubyLogo from '../../assets/ruby.png'
import sqlLogo from '../../assets/sql.png'
import swiftLogo from '../../assets/swift.png'

let logos = [
  cLogo, cLogo,
  cssLogo, cssLogo,
  htmlLogo, htmlLogo,
  javaLogo, javaLogo,
  phpLogo, phpLogo,
  pythonLogo, pythonLogo,
  rLogo, rLogo,
  rubyLogo, rubyLogo,
  sqlLogo, sqlLogo,
  swiftLogo, swiftLogo
]
for (let i = logos.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [logos[i], logos[j]] = [logos[j], logos[i]];
}

class Cards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFlipped: Array(20).fill(false),
      pair: [],
      pairs: []
    }
  }

  handleClick(index, logo) {
    const pair = this.state.pair.slice()
    const pairs = this.state.pairs.slice()
    const flip = this.state.isFlipped.slice()
    console.log(pairs.indexOf(logo) === -1)

    if (pair.length < 2 && pairs.indexOf(logo) === -1) {
      pair.push({ logo, index })
      flip[index] = !flip[index]
    } else
      if (flip[index] && pairs.indexOf(logo) === -1) {
        flip[index] = !flip[index]
        pair.pop()
      } else return

    this.setState({ isFlipped: flip, pair: pair })

    if (pair.length !== 2) {
      return
    }
    if ((pair[0].logo === pair[1].logo) && (pair[0].index !== pair[1].index)) {
      pairs.push(pair[0].logo)
      this.setState({ pairs: pairs, pair: [] })
    }
    else {
      setTimeout(() => {
        const flip = this.state.isFlipped.slice()
        flip[pair[0].index] = !flip[pair[0].index]
        flip[pair[1].index] = !flip[pair[1].index]
        this.setState({ isFlipped: flip, pair: [] })
      }, 1000)
    }
  }

  renderCard() {
    let cards = []
    cards = logos.map((logo, index) => {
      return (
        <Card logo={logo}
          key={index}
          isFlipped={this.state.isFlipped[index]}
          onClick={() => this.handleClick(index, logo)} />
      )
    })
    return cards;
  }

  render() {
    let win = false
    if (this.state.pairs.length === 10) win = true
    else win = false

    return (
      <div>
        <div className={win ? 'visible' : 'none'}>
          <h1 className="win">YOU WIN</h1>
          <button className='restart' onClick={() => window.location.reload(true)
          }>
            Click to Restart
          </button>
        </div>
        <div className={win ? 'none' : 'cards'}>
          {this.renderCard().map(card => card)}
        </div>
      </div>
    )
  }
}
export default Cards