import { HeroComponent } from "./components/hero-component"
import { RevealLink } from "./animations/revealLinks/revealLinks"

function App() {

  return (
      <main>
        <div style={{height: '100vh', marginTop: '10rem'}}>
          <HeroComponent />
        </div>
        <div style={{height: '100vh', display: 'grid', placeContent: 'center'}}>
          <RevealLink href="#">
            TWITTER
          </RevealLink>
          <RevealLink href="#">
            INSTAGRAM
          </RevealLink>
          <RevealLink href="#">
            FACEBOOK
          </RevealLink>
        </div>
      </main>
  )
}

export default App
