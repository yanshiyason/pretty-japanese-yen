describe('prettyJapaneseYen', function() {
  var prettyJapaneseYen = require('../lib/pretty-japanese-yen')

  it('works for numbers in range 0..999', function() {
    expect(prettyJapaneseYen(0)).toEqual('0円')
    expect(prettyJapaneseYen(500)).toEqual('500円')
    expect(prettyJapaneseYen(999)).toEqual('999円')
  })

  it('works for numbers in range 1,000..9,999', function() {
    expect(prettyJapaneseYen(1000)).toEqual('1千円')
    expect(prettyJapaneseYen(1550)).toEqual('1.5千円')
    expect(prettyJapaneseYen(9999)).toEqual('9.9千円')
  })

  it('works for numbers in range 10,000..999,999', function() {
    expect(prettyJapaneseYen(10000)).toEqual('1万円')
    expect(prettyJapaneseYen(15500)).toEqual('1.5万円')
    expect(prettyJapaneseYen(999999)).toEqual('99.9万円')
  })

  it('works for numbers in range 100,000,000..9,999,999,999', function() {
    expect(prettyJapaneseYen(100000000)).toEqual('1億円')
    expect(prettyJapaneseYen(155000000)).toEqual('1.5億円')
    expect(prettyJapaneseYen(9999999999)).toEqual('99.9億円')
  })

  it('works for numbers above 10,000,000,000', function() {
    expect(prettyJapaneseYen(10000000000)).toEqual('100億円')
    expect(prettyJapaneseYen(100000000000)).toEqual('1000億円')
    expect(prettyJapaneseYen(1000000000000)).toEqual('10000億円')
  })

  it('works for strings', function() {
    expect(prettyJapaneseYen('0')).toEqual('0円')
    expect(prettyJapaneseYen('500')).toEqual('500円')
    expect(prettyJapaneseYen('999')).toEqual('999円')
    expect(prettyJapaneseYen('100000000')).toEqual('1億円')
    expect(prettyJapaneseYen('155000000')).toEqual('1.5億円')
    expect(prettyJapaneseYen('9999999999')).toEqual('99.9億円')
  })

  it('works for negative numbers', function() {
    expect(prettyJapaneseYen(-1)).toEqual('-1円')
    expect(prettyJapaneseYen(-500)).toEqual('-500円')
    expect(prettyJapaneseYen(-999)).toEqual('-999円')
  })
})
