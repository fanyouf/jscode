
import { qs2obj } from './04.qs2obj'

const url = 'http://localhost/training/test_javascript.html?name=xiaohua&gender=man'

test('qs2obj(url)', () => {
  const res = qs2obj(url)
  expect(res.name).toBe('xiaohua')
  expect(res.gender).toBe('man')
})
