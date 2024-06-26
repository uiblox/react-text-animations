import { HeroComponent } from "./components/hero-component"
import { RevealLink } from "./animations/revealLinks/revealLinks"

function App() {

  return (
      <main>
        <div style={{height: '100vh', marginTop: '10rem'}}>
          <HeroComponent />
        </div>
        <div style={{height: '100vh', display: 'grid', placeContent: 'center'}}>
          <RevealLink href="#" staggered={false}>
            TWITTER
          </RevealLink>
          <RevealLink href="#" staggered={false}>
            INSTAGRAM
          </RevealLink>
          <RevealLink href="#" staggered={false}>
            FACEBOOK
          </RevealLink>
        </div>
        <div style={{height: '100vh', display: 'grid', placeContent: 'center'}}>
          <RevealLink href="#" staggered={true}>
            TWITTER
          </RevealLink>
          <RevealLink href="#" staggered={true}>
            INSTAGRAM
          </RevealLink>
          <RevealLink href="#" staggered={true}>
            FACEBOOK
          </RevealLink>
        </div>
      </main>
  )
}

export default App
