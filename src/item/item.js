import React, { Component } from 'react';

class Item extends Component {
  constructor() {
    super()

    this.state = {
      items: [
        {
          id: 1,
          label: 'List item 1'
        },
        {
          id: 2,
          label: 'List item 2'
        }
      ],
      hasErrored: false,
      isLoading: false
    }
  }

  fetchData(url) {
    this.setState({ isLoading: true })

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        this.setState({ isLoading: false })

        return response
      })
      .then((response) => response.json())
      .then((items) => this.setState({ items }))
      .catch(() => this.setState({ hasErrored: true }))
  }

  componentDidMount() {
    this.fetchData('http://5826ed963900d612000138bd.mockapi.io/items')
  }

  render() {
    if(this.state.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>
    }
    if(this.state.isLoading) {
      return <p>Loading</p>
    }

    return (
      <ul>
        {this.state.items.map(({id, label}) => (
          <li key={id}>
            {label}
          </li>
        ))}
      </ul>
    )
  }
}

export default Item
