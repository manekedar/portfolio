

import Contact from './components/Contact'
import Main from './components/Main'
import PersonalInfo from './components/PersonalInfo'
import Projects from './components/Projects'
 import Qualificaton from './components/Qualificaton'
import Sidenav from './components/Sidenav'
import Skill from './components/Skill'
import Work from './components/Work'

function App() {


  return (
    <div className='App'>
      <Sidenav />
      <Main/>
      <Work/>
      <Projects />
      <Qualificaton/>
      <Skill/>
      <PersonalInfo/>
      <Contact/>
    </div>
  )
}

export default App
