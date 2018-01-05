'use strict'

module.exports = prettyJapaneseYen

function prettyJapaneseYen(number) {
  if (number >= 0 && number <= 999) {
    return number + '円'
  } else if (number >= 1000 && number <= 9999) {
    return toJapaneseCurrencyInSen(number)
  } else if (number >= 10000 && number <= 99999999) {
    return toJapaneseCurrencyInMan(number)
  } else if (number >= 100000000 && number <= 9999999999) {
    return toJapaneseCurrencyInOku(number)
  } else {
    return Math.trunc(number / 100000000) + '億円'
  }
}

function toJapaneseCurrencyInSen(number) {
  var result = divmod(number, 1000)
  var units = result.units
  var remainder = result.remainder
  var decimals = divmod(remainder, 100).units
  return decimals === 0 ? units + '千円' : units + '.' + decimals + '千円'
}

function toJapaneseCurrencyInMan(number) {
  var result = divmod(number, 10000)
  var units = result.units
  var remainder = result.remainder
  var decimals = divmod(remainder, 1000).units
  return decimals === 0 ? units + '万円' : units + '.' + decimals + '万円'
}

function toJapaneseCurrencyInOku(number) {
  var result = divmod(number, 100000000)
  var units = result.units
  var remainder = result.remainder
  var decimals = divmod(remainder, 10000000).units
  return decimals === 0 ? units + '億円' : units + '.' + decimals + '億円'
}

function divmod(number, by) {
  var units = Math.trunc(number / by)
  var remainder = number % by

  return {
    units: units,
    remainder: remainder,
  }
}
