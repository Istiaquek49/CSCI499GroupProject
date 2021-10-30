import React, { useState } from 'react'

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationTerm, setLocationTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const onSearchClick = () => {
    if (searchTerm.length) {
      fetch(`/search?searchTerm=${searchTerm}`)
        .then(res => res.json())
        .then(results => setSearchResults(results))
    }
  }

  const results = () => {
    if (searchResults.length) {
      return (
        <div>
          {searchResults.map(result => (
            <h1>
              {result.name}
            </h1>
          ))}
        </div>
      )
    }
  }

  return (
    <div style={{
      fontSize: 20
    }}>
      Find
      <input style={{
        height: 50,
        width: 250,
        borderRadius: 5,
        outline: 'none',
        border: '1px solid #F3F7F0',
        marginRight: 10,
        marginLeft: 10,
        paddingLeft: 10
      }}
        placeholder="Skiing, Hotels, Surfing, etc. . ."
        onChange={e => setSearchTerm(e.target.value)}
      />
      In
      <input style={{
        height: 50,
        width: 100,
        borderRadius: 5,
        outline: 'none',
        border: '1px solid #F3F7F0',
        paddingLeft: 10,
        marginRight: 10,
        marginLeft: 10
      }}
        placeholder="State"
        onChange={e => setLocationTerm(e.target.value)}
      />
      <button style={{
        height: 50,
        border: 'none',
        borderRadius: 5,
        width: 80,
        backgroundColor: '#F3F7F0'
      }}
        onClick={_ => onSearchClick()}
      >
        Search
      </button>
      {results()}
    </div>
  )
}

export default Searchbar