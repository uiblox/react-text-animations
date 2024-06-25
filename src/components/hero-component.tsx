import { Reveal } from '../animations/reveal'
import './hero-component.scss'



export const HeroComponent = () => {

    return (
        <div className="hero_container">
            <Reveal>
                <h2 className="hero_title">Hello there. I'm Christian.</h2>
            </Reveal>
            <Reveal>
                <p className='hero_subTitle'>I'm a <strong>Full Stack Developer</strong></p>
            </Reveal>
            <Reveal>
                <div className='hero_detail'>
                    <p>Frontend developer with experience building responsive webpages with animations, carousels, scroll interactions and data visualizations. Proficient leveraging RESTful APIs and performing data transformations to populate the frontend from end point data. Experience also includes working with a variety of content management platforms and building reusable solutions for UI components. </p>
                </div>
            </Reveal>
            <Reveal>
                <button className='hero_cta'>Let's Connect</button>
            </Reveal>
        </div>
    )
}