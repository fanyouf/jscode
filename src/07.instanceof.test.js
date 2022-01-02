import { instance_of } from "./07.instanceof";

test('instance_of(obj, Object)', () => {
    const res = instance_of({}, Object)
    expect(res).toBe(true)
})


test('instance_of([], Function)', () => {
    const res = instance_of([], Function)
    expect(res).toBe(false)
})