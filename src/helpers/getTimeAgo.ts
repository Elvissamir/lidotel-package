const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
}

const getUnitAndValueDate = (secondsElapsed: number) => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === "second") {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1

      return { value, unit }
    }
  }

  return { value: 1, unit: 'second' }
}
  
const getSecondsDiff = (timestamp: number) => {
    return (Date.now() - timestamp) / 1000
}
  
const getTimeAgo = (timestamp: number) => {
    const rtf = new Intl.RelativeTimeFormat("en")
    const secondsElapsed = getSecondsDiff(timestamp)
   
    const {value, unit} = getUnitAndValueDate(secondsElapsed)
    
    return rtf.format(value, unit as any)
}

export default getTimeAgo