import { createContext, useContext, useState } from "react"

const CounterContext = createContext({})

export const CounterProvider = ({ children }) => {
  const [likes, setLikes] = useState(0)
  const [comments, setComments] = useState(0)

  const incrementLikes = () => {
    setLikes(likes + 1)
  }

  const incrementComment = () => {
    setComments(comments + 1)
  }

  return (
    <CounterContext.Provider
      value={{
        likes,
        comments,
        incrementLikes,
        incrementComment
      }}
    >
      {children}
    </CounterContext.Provider>
  )
}

export const useCounter = () => useContext(CounterContext)