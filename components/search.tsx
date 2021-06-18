import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'

export default function Search() {

  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])
  const searchEndpoint = (query) => `/api/search?q=${query}`

  fetch(`../pages/api/search?q=build`).then(async response => {
    try {
     const data = await response.json()
     console.log('response data?', data)
   } catch(error) {
     console.log('Error happened here!')
     console.error(error)
   }
  })
  
  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query)
    if (query.length) {

      fetch(searchEndpoint(query))
        .then(
          res => res.json())
        .then(res => {

      console.log('test')
          setResults(res.results)
        })
    } else {
      setResults([])
    }
  }, [])

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, [])

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div className="searchInner"
      ref={searchRef}
    >
      <input 
      onChange={onChange}
        onFocus={onFocus}
        placeholder='Search...'
        type='text'
        value={query} 
        className="searchInput" />
      { active && results.length > 0 && (
        <ul className="text-white p-5">
          <p className="smallCaps small">Results</p>
          {results.map(({ id, title, url }) => (
            <li key={id}>
              <Link href="/[url]" as={`/${url}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      ) }
    </div>
  )
}