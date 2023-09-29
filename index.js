const getRow = (firstRow, secondRow, symbolToCount) => {
  if (
    firstRow === null ||
    firstRow === '' ||
    secondRow === null ||
    secondRow === '' ||
    symbolToCount === null ||
    symbolToCount === ''
  ) {
    return 'Невірні дані'
  }
  const firstLength = firstRow.split(`${symbolToCount}`).length - 1
  const secondLength = secondRow.split(`${symbolToCount}`).length - 1
  if (firstLength === secondLength) {
    return 'Кількість однакова'
  } else if (firstLength > secondLength) {
    return `Кількість більше в "${firstRow}"\nКількість ${firstLength}`
  } else {
    return `Кількість більше в "${secondRow}"\nКількість ${secondLength}`
  }
}

const symbolToCount = prompt('Введите символ для подсчета его вхождений:')
const firstRow = prompt('Введите первую строку:')
const secondRow = prompt('Введите вторую строку:')
alert('Завдання 1\n' + getRow(firstRow, secondRow, symbolToCount))

const getPhone = phoneNumber => {
  const cleanedNumber = phoneNumber.replace(/\D/g, '')

  if (cleanedNumber.length === 10) {
    return `+7 (${cleanedNumber.slice(0, 3)}) ${cleanedNumber.slice(
      3,
      6
    )}-${cleanedNumber.slice(6, 8)}-${cleanedNumber.slice(8)}`
  } else if (cleanedNumber.length === 11) {
    return `+${cleanedNumber.slice(0, 1)} (${cleanedNumber.slice(
      0,
      3
    )}) ${cleanedNumber.slice(3, 6)}-${cleanedNumber.slice(
      6,
      8
    )}-${cleanedNumber.slice(9)}`
  } else {
    return 'Невірні дані'
  }
}

const phoneNumber = prompt(
  'Введите номер(наприклад +71234567890 || 1234567890):'
)
alert('Завдання 2\n' + getPhone(phoneNumber))
