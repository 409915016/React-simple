import React, {Component} from 'react'

class Ninjas extends Component {
    render () {
        const {ninjas}   = this.props
        const ninjasList = ninjas.map(i => {
            return (
              <div className="ninja" key={ i.id }>
                  <div>Name: { i.name }</div>
                  <div>Age: { i.age }</div>
              </div>
            )
        });
        return (
          <div className="ninja-list">
              { ninjasList }
          </div>
        )
    }
}

export default Ninjas