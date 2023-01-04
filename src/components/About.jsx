import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-5xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
            I am a Full Stack Developer with an educational background in Electrical Engineering, where I graduated with a degree in Applied Informatics from a leading European University. Shortly after graduation I found myself spending my spare time learning about coding and teaching myself programming fundamentals. .
                
            </p>

            <br/>

            <p className='text-xl'>In Fall of 2022 I decided to go all-in on my web development career and joined one of the world’s top-ranked technology bootcamps at Ironhack. During this intense but rewarding program I developed solid skills in: </p>
            <br/>
            <p className='text-xl'>✅ Backend: MongoDB, Mongoose, Express.js, Node.js, REST APIs, AXIOS and integration of third-party APIs and npm packages</p>
            <br/>
            <p className='text-xl'>✅ Front End: React, JavaScript, HTML5, CSS3, Handlebars, Bootstrap and DOM Manipulation
            </p> <br/>
            <p className='text-xl'>✅ Tools: MongoDB Compass, Visual Studio Code, Git, GitHub
            </p><br/>
            <p className='text-xl'>✅ Methodologies: Agile & Scrum</p>
            <br/>

            <p className='text-xl'>I am fascinated by every aspect of coding and I am very curious about new technologies. I continue to stay up to date by teaching myself new tech and best practices by using online resources including LinkedIn Learning, Udemy, and YouTube.</p>
            <br/>
            <p className='text-xl'>I consider myself a team-oriented self-starter who is equally motivated by solving complex problems as well as collaborating with others on new ideas.</p>
            

        </div>
    </div>
  )
}

export default About