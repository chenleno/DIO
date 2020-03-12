import uniq from '../src/uniq/uniq'

test('string unsort', () => {
  expect(uniq('4242523423eaewffw', false)).toBe('4253eawf')
})

test('string[] unsort', () => {
  expect(uniq(['33','22','22','e','q','q'], false)).toStrictEqual(['33', '22', 'e', 'q'])
})

test('number[] unsort', () => {
  expect(uniq([4,3,2,3,5,1,1,2], false)).toEqual([4,3,2,5,1])
})

test('string sort', () => {
  expect(uniq('2314453eeawa')).toBe('12345aew')
})

test('string[] sort', () => {
  expect(uniq(['3','2','1','1','e','a','e'])).toEqual(['1', '2', '3', 'a', 'e'])
})

test('number[] sort', () => {
  expect(uniq([3,2,4,1,5,5,3,2])).toEqual([1,2,3,4,5])
})

