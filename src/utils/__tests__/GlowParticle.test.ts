import GlowParticle from '../GlowParticle'

const color = { r: 255, g: 149, b: 0 }

describe(`GlowParticle`, () => {
  it(`construct correctly`, () => {
    const particle = new GlowParticle({x: 1,y : 1,radius: 1, rgb: color})
  })
})
