import GlowParticle from '../GlowParticle'

const color = { r: 255, g: 149, b: 0 }

describe(`GlowParticle`, () => {
  it(`construct correctly`, () => {
    const glow = new GlowParticle({ x: 1, y: 1, radius: 1, rgb: color })
    expect(glow.x).toBe(1)
  })
})
