export function SetFormat(unixtimestamp: any): any {
    // Ensure the timestamp is a number before attempting to transform it
    const numericUnixtimestamp = Number(unixtimestamp)
    const date = new Date(numericUnixtimestamp * 1000); // Multiply by 1000 to convert from seconds to milliseconds
    const options = { 
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short'
    };
    return date.toLocaleString('en-US', options as Intl.DateTimeFormatOptions);
  }