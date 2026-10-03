export const formatDate = (
  date: Date,
  locale: Intl.LocalesArgument = 'en-US',
  options?: Intl.DateTimeFormatOptions,
): string => new Intl.DateTimeFormat(locale, options).format(date)
