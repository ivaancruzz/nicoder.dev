export function formatDate(date: string) {
  const _date = new Date(date)
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]

  const day = _date.getDate()
  const month = months[_date.getMonth()]
  const year = _date.getFullYear()

  return `${day} de ${month} de ${year}`
}
