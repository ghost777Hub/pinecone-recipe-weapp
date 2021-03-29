/*驼峰转短横线*/
function camelCaseToDash(str) {
  return str.replace( /[A-Z]/g, function( i ) {
    return '-' + i.toLowerCase()
  })
}
/*首字母大写*/
function initialsUpperCase(str) {
  return str.replace(/^\S/, s => s.toUpperCase())
}
/*首字母小写*/
function initialsLowerCase(str) {
  return str.replace(/^\S/, s => s.toLowerCase())
}
/*命名对象*/
function nameObjList(name){
  return {
    dashName: camelCaseToDash(name),  //用于css选择器命名：短横线
    upperName: initialsUpperCase(name),  //用于组件文件命名：首字母大写
    lowerName: initialsLowerCase(name),  //用于组件文件命名：首字母小写
  }
}



/*文件模板*/
const files = {
  'tsx_fc_page_template': (name,query) => {
    return [
      `import React from 'react'`,
      `import './${query.lowerName}.scss'`,
      `import {View, Text} from '@tarojs/components'`,
      ``,
      ``,
      ``,
      `//定义`,
      `interface ${query.upperName}Props {}`,
      ``,
      `//组件`,
      `const ${query.upperName}: React.FC<${query.upperName}Props> = () => {`,
      `  return(`,
      `    <View className="${query.dashName}-page">`,
      `      <Text>${query.lowerName}页标题</Text>`,
      `    </View>`,
      `  )`,
      `}`,
      `export default ${query.upperName}`
    ]
  },
  'tsx_fc_component_template': (name,query) => {
    return [
      `import React from 'react'`,
      `import './${query.lowerName}.scss'`,
      `import {View, Text} from '@tarojs/components'`,
      ``,
      ``,
      ``,
      `//定义`,
      `interface ${query.upperName}Props {}`,
      ``,
      `//组件`,
      `export const ${query.upperName}: React.FC<${query.upperName}Props> = () => {`,
      `  return(`,
      `    <View className="${query.dashName}-component">`,
      `      <Text>${query.lowerName}组件单元</Text>`,
      `    </View>`,
      `  )`,
      `}`,
    ]
  },
  'scss_page_template': (name,query) => {
    return [
      `.${query.dashName}-page {`,
      ``,
      `}`
    ]
  },
  'scss_component_template': (name,query) => {
    return [
      `.${query.dashName}-component {`,
      ``,
      `}`
    ]
  },
  'ts_config_template': (name,query) => {
    return [
      `export default {`,
      `  navigationBarTitleText: '${query.lowerName}'`,
      `}`
    ]
  },
  'ts_index_template': (name,query) => {
    return [
      `export * from './${query.lowerName}'`
    ]
  },
  'ts_redux_slice_template': (name,query) => {
    return [
      `import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'`,
      ``,
      ``,
      ``,
      `//类型定义`,
      `interface ${query.lowerName}State {}`,
      ``,
      `//数据`,
      `const initialState: ${query.lowerName}State = {}`,
      ``,
      ``,
      `/*异步API请求*/`,
      `//某某API`,
      `export const getTemplateAPI = createAsyncThunk(`,
      `  '${query.lowerName}/getTemplateAPI',`,
      `  async (parameters:{},) => {`,
      `    //第二参数thunkAPI: thunkAPI.dispatch()`,
      `    const res = await fetch('',parameters)`,
      `    return res`,
      `  }`,
      `)`,
      ``,
      ``,
      `//创建slice`,
      `export const ${query.lowerName}Slice = createSlice({`,
      `  name: '${query.lowerName}',`,
      `  initialState,`,
      `  reducers: {},`,
      `  extraReducers:{`,
      `    [getTemplateAPI.pending.type]: (state,  action)=>{`,
      `      console.log('getTemplateAPI:', state, action)`,
      `    },`,
      `    [getTemplateAPI.fulfilled.type]: (state,  action)=>{`,
      `      console.log('getTemplateAPI:', state, action)`,
      `    },`,
      `    [getTemplateAPI.rejected.type]: (state,  action)=>{`,
      `      console.log('getTemplateAPI:', state, action)`,
      `    },`,
      `  }`,
      `})`
    ]
  },
}


/*文件夹模板*/
const folders = {
  'React FC Page Folder': (name, query, paths) => {
    const newQuery = nameObjList(name)
    return {
      [`${newQuery.lowerName}.tsx`]: files['tsx_fc_page_template'](name, newQuery),
      [`${newQuery.lowerName}.scss`]: files['scss_page_template'](name, newQuery),
      [`${newQuery.lowerName}.config.ts`]: files['ts_config_template'](name, newQuery),
    }
  },
  'React FC Component Folder': (name, query, paths) => {
    const newQuery = nameObjList(name)
    return {
      [`${newQuery.lowerName}.tsx`]: files['tsx_fc_component_template'](name, newQuery),
      [`${newQuery.lowerName}.scss`]: files['scss_component_template'](name, newQuery),
      [`index.ts`]: files['ts_index_template'](name, newQuery),
    }
  },
  'Redux Slice TS Folder': (name, query, paths) => {
    const newQuery = nameObjList(name)
    return {
      [`slice.ts`]: files['ts_redux_slice_template'](name, newQuery),
    }
  },
}

module.exports = { files, folders }