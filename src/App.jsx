import Contact from './components/Contact'
import './App.css'

function App() {

  return (
    <>
      <h1 class="heading">Awesome Websites and their Contact Details</h1>
    <div className="contacts">
            <Contact 
                img="./images/facebook.jpg" 
                name="Facebook"
                about="Facebook is a popular social networking platform to meet old and new friends."
                website="https://facebook.com"
                email="contact@fb.com"
            />
            <Contact 
                img="./images/tuhamworld.jpg"
                name="TuhamWorld CC"
                about="TuhamWorld CC build online presence via smart and optimized website for business owners."
                website="https://tuhamworld.com"
                email="hello@tuhamworld.com"
            />
            <Contact 
                img="./images/linkedin.jpg"
                name="LinkedIn"
                about="LinkedIn is a business and employment-focused social media platform for business purposes."
                website="https://linkedin.com"
                email="contact@linkedin.com"
            />
            <Contact 
                img="./images/elivait.png"
                name="Elivait Academy"
                about="Elivait Academy is an elearning platform to learn a new skill, or to hone existing skill-sets."
                website="https://elivait.com.ng"
                email="support@elivait.com.ng"
            />
            <Contact 
                img="./images/twitter.jpg"
                name="Twitter"
                about="Twitter, Inc. was an American social media company based in San Francisco, California."
                website="https://twitter.com"
                email="contact@twitter.com"
          />

      </div>
      </>

  )
}

export default App
