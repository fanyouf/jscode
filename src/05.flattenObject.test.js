
import { flatten } from './05.flattenObject'

test('flatten(obj)-对象扁平化', () => {
  const res = flatten({
    a: 1,
    b: { c: 2, d: { e: 3 } },
    f: [
      4,
      {
        j: 5,
        k: { l: 6 }
      }
    ]
  })
  expect(Object.keys(res).join('')).toBe(['a', 'b.c', 'b.d.e', 'f[0]', 'f[1].j', 'f[1].k.l'].join(''))
  // console.log(res)
  expect(JSON.stringify(res)).toBe(JSON.stringify({ a: 1, 'b.c': 2, 'b.d.e': 3, 'f[0]': 4, 'f[1].j': 5, 'f[1].k.l': 6 }))
})
