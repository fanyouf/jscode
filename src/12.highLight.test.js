import { highLight } from './12.highLight'

test('highLight', () => {
  const str = 'abcAbcAB'
  const key = 'ab'
  expect(highLight(str, key)).toBe(
    '<span>ab</span>c<span>Ab</span>c<span>AB</span>'
  )
})
