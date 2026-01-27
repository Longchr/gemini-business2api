export const mailProviderOptions = [
  { label: 'DuckMail', value: 'duckmail' },
  { label: 'Moemail', value: 'moemail' },
] as const

export type TempMailProvider = typeof mailProviderOptions[number]['value']

export const defaultMailProvider: TempMailProvider = 'duckmail'
