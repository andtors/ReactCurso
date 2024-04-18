import styles from './Search.module.css'
import { Link } from 'react-router-dom'

import React from 'react'

import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'
import PostDetail from '../../components/PostDetail'

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const {documents: posts} = useFetchDocuments("posts", search)
    
  return (
    <div>
        <h1>Resultados encontrados para: {search}</h1>
       <div className={styles.search_container}>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark">Voltar</Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
       </div>
    </div>
  )
}

export default Search