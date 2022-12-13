import React from 'react'
import './user.css'

function User() {
  return (
    <div className='cont'>
      <div className='subcont'>
        <div className='name'>
          <h1>Gautam Singh</h1>
          <button className='btn'>Follow</button>
        </div>
        <h4 className='engg'>Softwere Engineer</h4>
        <div className='tech'>
          <div className='techData'>
            <img src="" alt="" />
            <p>React.js</p>
          </div>
          <div className='techData'>
            <img src="" alt="" />
            <p>Node.js</p>
          </div>
          <div className='techData'>
            <img src="" alt="" />
            <p>JavaScript</p>
          </div>
          <div className='techData'>
            <img src="" alt="" />
            <p>SQL</p>
          </div>
          <div className='techData'>
            <img src="" alt="" />
            <p>Python</p>
          </div>
          <div className='techData'>
            <img src="" alt="" />
            <p>MongoDb</p>
          </div>
          <div className='techData'>
            <img src="" alt="" />
            <p>React House</p>
          </div>
          <div className='techData'>
            <img src="" alt="" />
            <p>React Native</p>
          </div>
        </div>

      </div>
      <div>
        <img className='pic' src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=2000"  
        width="100%"
        height="200"
        alt="" />
      </div>
    </div>
  )
}

export default User
