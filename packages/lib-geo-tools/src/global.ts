export interface GlobalI18n {
  t?: (key: string, defaultStr: string, vars?: Record<string, string>) => string
}

const GLOBAL: GlobalI18n = {}
export default GLOBAL
