import { translate as i18translate, Replacements, TranslateOptions } from 'react-i18nify'

export const translate =
  (basePath: string) => (key: string, replacements?: Replacements, options?: TranslateOptions) =>
    i18translate(`${basePath}.${key}`, replacements, options)
