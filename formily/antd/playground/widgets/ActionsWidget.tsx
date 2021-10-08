import React, { useEffect } from 'react'
import { Space, Button, Radio } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { useDesigner, TextWidget } from '@designable/react'
import { GlobalRegistry } from '@designable/core'
import { observer } from '@formily/react'
import { useTranslation } from 'react-i18next'
import { legacyLANG } from '../../src/i18n'

import { loadInitialSchema, saveSchema } from '../service'

export const ActionsWidget = observer(() => {
  const { i18n } = useTranslation()
  const designer = useDesigner()
  useEffect(() => {
    loadInitialSchema(designer)
  }, [])

  return (
    <Space style={{ marginRight: 10 }}>
      <Button href="https://designable-fusion.formilyjs.org">
        Alibaba Fusion
      </Button>

      <Radio.Group
        // value={GlobalRegistry.getDesignerLanguage()}
        value={i18n.language}
        optionType="button"
        options={[
          { label: 'English', value: 'en-US' },
          { label: '简体中文', value: 'zh-CN' },
        ]}
        onChange={(e) => {
          i18n.changeLanguage(e.target.value)
          // legacyLANG(e.target.value, 'vp')
          // GlobalRegistry.setDesignerLanguage(e.target.value)
        }}
      />

      <Button href="https://github.com/alibaba/designable" target="_blank">
        <GithubOutlined />
        Github
      </Button>

      <Button
        onClick={() => {
          saveSchema(designer)
        }}
      >
        <TextWidget>Save</TextWidget>
      </Button>

      <Button
        type="primary"
        onClick={() => {
          saveSchema(designer)
        }}
      >
        <TextWidget>Publish</TextWidget>
      </Button>
    </Space>
  )
})
