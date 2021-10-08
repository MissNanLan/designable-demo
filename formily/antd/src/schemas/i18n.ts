// import { createI18nInstance } from '../i18n'

// const i18n = createI18nInstance()

// export const legacyLANG = (ns?: string): Record<string, string> => {
//   const LANG: Record<string, string> = {}
//   return new Proxy(LANG, {
//     get: (target: Record<string, string>, p: PropertyKey) => {
//       if (typeof p === 'string') {
//         return i18n.t<string>(p, { ns })
//       }

//       return target[p as unknown as string]
//     },
//   })
// }

// export default i18n
