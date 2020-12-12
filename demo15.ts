/**
 * Enum枚举类型
 */
enum Status{
  MAEEAGE,
  SAP,
  DAO,
}

function getService(status: any) {
  if (status === Status.MAEEAGE) {
    return 'MAEEAGE'
  } else if (status === Status.SAP) {
    return 'SAP'
  } else if (status === Status.DAO) {
    return 'DAO'
  }
}

console.table({'MAEEAGE': Status.MAEEAGE, 'SAP': Status.SAP, 'DAO': Status.DAO})

console.log(`我选择${getService(Status.DAO)}`)
console.log(`我选择${getService(1)}`)
