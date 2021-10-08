import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

export const createI18nInstance = () => {
  const inst = i18next.createInstance()
  inst
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
      resources: {
        'en-US': {
          vp: require('../locale/en_US.json'),
          // test: 'test1',
          // sources: {
          //   Inputs: 'Inputs',
          // },
          // Input: {
          //   title: 'Input',
          //   settings: {
          //     'x-component-props': {
          //       addonAfter: 'Addon After',
          //       addonBefore: 'Addon Before',
          //       maxLength: 'Max Length',
          //       prefix: 'Prefix',
          //       suffix: 'Suffix',
          //       autoSize: 'Auto Size',
          //       showCount: 'Show Count',
          //       checkStrength: 'Check Strength',
          //     },
          //   },
          // },
        },
        'zh-CN': {
          vp: require('../locale/zh_CN.json'),
          // {
          //   test: '测试',
          //   sources: {
          //     Inputs: '输入控件',
          //   },
          //   Input: {
          //     title: '输入框',
          //     settings: {
          //       'x-component-props': {
          //         addonAfter: '后缀标签',
          //         addonBefore: '前缀标签',
          //         maxLength: '最大长度',
          //         prefix: '前缀',
          //         suffix: '后缀',
          //         autoSize: {
          //           title: '自适应高度',
          //           tooltip:
          //             '可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }',
          //         },
          //         showCount: '是否展示字数',
          //         checkStrength: '检测强度',
          //       },
          // },
          // },
        },
      },
      ns: 'vp',
      defaultNS: 'vp',
      interpolation: {
        escapeValue: false,
      },
    })
  return inst
}

export const i18n = createI18nInstance()
