import {
    Father,
    Son
} from './08.es5-inherit'

test('继承属性', () => {
    const s1 = new Son('张', 18)

    expect(s1.age === 18).toBe(true)
    expect(s1.firstName === '张').toBe(true)
})

test('继承方法', () => {
    const s1 = new Son('张', 18)
    // console.log(s1 instanceof Father) false

    expect(s1.say === Father.prototype.say).toBe(true)
    expect(typeof s1.say === 'function').toBe(true)
})