import { useState } from'react'

const App = () => {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])

    console.log('messages',messages)

  const getResponse = async () => {
    const response = await fetch(`http://localhost:8000/prompt/${text}`)
      const data = await response.json()
      console.log('data', data)
      setMessages([...messages,
          {
            author: data.messages[0].content,
            bot:  data.candidates[0].content
          }
      ])
  }

  console.log(text)

  return (
    <div className="chat-bot">
      <div className="chat-header">
        <div className="info-container">
            <h3>Chat with</h3>
            <h2>PaLM 2 Bot</h2>
        </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="rgb(6, 120, 84)" fillOpacity="1"
                    d="M0,224L60,218.7C120,213,240,203,360,186.7C480,171,600,149,720,154.7C840,160,960,192,1080,186.7C1200,181,1320,139,1380,117.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
      </div>
      <div className="feed">
          {messages?.map((message, _index) =>
              <div key={_index}>
                  <div className="question bubble">{message.author}</div>
                  <div className="response bubble">{message.bot}</div>
              </div>


          )}

      </div>
      <textarea value={text} onChange={e => setText(e.target.value)}/>
      <button onClick={getResponse}>⇨</button>
    </div>
  )
}

export default App
