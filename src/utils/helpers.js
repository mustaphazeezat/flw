export const readTime = (text) => {
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    return time
}

export const timePast=(date)=> {

    var seconds = Math.floor((new Date() - new Date(date)) / 1000);
    var divisors = [31536000, 2592000, 86400, 3600, 60, 1]
    var description = ["years", "months", "days", "hours", "minutes", "seconds"]
    var result = [];
  
    var interval = seconds;
  
    for (let i = 0; i < divisors.length; i++) {
      interval = Math.floor(seconds / divisors[i])
      if (interval > 1) {
        result.push(interval + " " + description[i])
      }
      seconds -= interval * divisors[i]
    }
  
    return result[0]
  }