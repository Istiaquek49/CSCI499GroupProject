import React, { useState } from 'react'

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationTerm, setLocationTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [searched, setSearched] = useState(false)

  const onSearchClick = () => {
    setSearched(true)
    if (searchTerm.length) {
      fetch(`/search?searchTerm=${searchTerm}`)
        .then(res => res.json())
        .then(results => setSearchResults(results))
    }if (locationTerm.length) {
      fetch(`/search?searchTerm=${locationTerm}`)
        .then(res => res.json())
        .then(results => setSearchResults(results))
    }
  }


  const results = () => {
    if (searchResults.length) {
      return (
        <div style={{
          width: 500,
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          maxHeight: 484,
          backgroundColor: '#F3F7F0',
          overflow: 'scroll',
          zIndex: -1
        }}>
          {searchResults.map(result => (
            <div style={{
              height: 80,
              padding: '10px 10px 10px 10px',
              borderBottom: '1px solid #e4e4e4',
              fontWeight: 6,
              cursor: 'pointer'
            }}
              onClick={_ => window.location.href=`/item?id=${result.objectID}`}
            >
              {result.name}
            </div>
          ))}
        </div>
      )
    } else if (searched === true && searchResults.length < 1) {
      {
        return (
          <div style={{
            height: 80,
            padding: '10px 10px 10px 10px',
            borderRadius: '0px 5px 5px 0px',
            fontStyle: 'italic',
            fontWeight: 4,
            border: '1px solid #e4e4e4',
            color: '#e3e3e3',
            borderRadius: 5
          }}>
            No Results
          </div>
        )
      }
    }
  }

  return (
    <div style={{
      fontSize: 20,
      position: 'relative',
      zIndex: -1
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