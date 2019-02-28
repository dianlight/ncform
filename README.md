# ncform 

![vue 2.5](https://img.shields.io/badge/vue-2.5-green.svg)

[中文版](README_CN.md)

ncform, a pleasing form development method that generates form UIs and their interactions with just configuration.

![preview](http://daniel-test.image.alimmdn.com/ncform/ncform-preview?spm=a312x.7755591.0.0.502b4e08Lxgnuv)

## Playground

Experience the charm of ncform on the [Playground](https://ncform.github.io/ncform/ncform-show/playground/index.html) to deepen your understanding of ncform

> [Playground](https://ncform.github.io/ncform/ncform-show/playground/index.html) shows the examples of ncform most of the use of the scene ( I believe the examples are the best document ), it is recommended to carefully browse the examples, the configuration of the examples can be used directly in the actual development

## Quick Start

### In node.js

1.install
```
npm i @ncform/ncform @ncform/ncform-common --save
npm i @ncform/ncform-theme-elementui element-ui axios --save 
```

2.import
```
import Vue from 'vue';
import vueNcform from '@ncform/ncform';

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ncformStdComps from '@ncform/ncform-theme-elementui';
import axios from 'axios';

Vue.use(Element);
Vue.use(vueNcform, { extComponents: ncformStdComps });
window.$http = Vue.prototype.$http = axios;
```

3.usage
```
# demo.vue

<template>
  <div>
    <ncform :form-schema="formSchema" form-name="your-form-name" v-model="formSchema.value" @submit="submit()"></ncform>
    <el-button @click="submit()">Submit</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formSchema: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          }
        }
      }
    }
  },
  methods: {
    submit () {
      this.$ncformValidate('your-form-name').then(data => {
        if (data.result) {
          console.log(this.$data.formSchema.value)
          // do what you like to do
        }
      })
    }
  }
}
</script>
```
You can refer to the [ncform-demo](https://github.com/daniel-dx/ncform-demo) project

### In a browser

```
<html>

<head>
  <link rel="stylesheet" href="https://unpkg.com/element-ui@2.4.3/lib/theme-chalk/index.css">
</head>

<body>
  <div id="demo">
    <ncform :form-schema="formSchema" form-name="your-form-name" v-model="formSchema.value" @submit="submit()"></ncform>
    <el-button @click="submit()">Submit</el-button>
  </div>

  <script type="text/javascript" src="https://unpkg.com/vue/dist/vue.min.js"></script>
  <script type="text/javascript" src="https://unpkg.com/axios/dist/axios.min.js"></script>

  <script type="text/javascript" src="https://unpkg.com/@ncform/ncform-common/dist/ncformCommon.min.js"></script>
  <script type="text/javascript" src="https://unpkg.com/@ncform/ncform/dist/vueNcform.min.js"></script>

  <script type="text/javascript" src="https://unpkg.com/element-ui/lib/index.js"></script>
  <script type="text/javascript" src="https://unpkg.com/@ncform/ncform-theme-elementui/dist/ncformStdComps.min.js"></script>

  <script type="text/javascript">
    Vue.use(vueNcform, { extComponents: ncformStdComps });

    // Bootstrap the app
    new Vue({
      el: '#demo',
      data: {
        formSchema: {
          type: 'object',
          properties: {
            name: {
              type: 'string'
            }
          }
        }
      },
      methods: {
        submit() {
          this.$ncformValidate('your-form-name').then(data => {
            if (data.result) {
              // do what you like to do
            }
          });
        }
      }
    });
  </script>
</body>

</html>
```

## Features

- Configuration generation: A JSON data structure completely describes the UI of a form and its interaction behavior, and the development of the form is completed.

- Flexible interaction: Form controls flexibly interact with each other with powerful `dx expressions`

- Standard components: ncform defines a standard set of form component configuration specifications that can meet more than 90% of your form development needs without extensions.

- Rich verification: ncform comes with more than ten commonly used verification rules to meet more than 90% of your form validation requirements

- Extended friendliness: Form components and validation rules can be flexible extended and provide tools to simplify extension work

## Documents

- [ncform config/props/api/event](./CONFIG.md)

- [Standard Components](./STD-COMP.md)

- [How to extend](./EXT-DOC.md)

## Solve Pain Points

Most of the features in the management system are not the query list, that is, the form.  
The development of the form is a boring, nutrient-free, high-consumption repetitive physical activity that takes time and effort.  
The interaction between the form controls and the validation rules of the form items are very easy to produce bugs.  
So, in order to improve the efficiency of form development, reduce bugs, improve form development specifications and robustness, and most importantly, improve the development happiness of developers, the project is born

## Repeat the wheel?

A similarly well-known scheme in the community  ( listed in the reference projects ) has one or more of the following problems:

1. Basically designed in accordance with json-schema, but it is not appropriate to use json-schmea to describe a form.

2. For the interaction between form items, complex verification logic, there is no good solution

3. Can't complete all the UI and interaction behavior of the form with just one configuration ( meaning the configuration can be stored )

4. The underlying components provided by default are not rich enough to cover the form components commonly used in actual development.

5. Long time no maintenance, code writing style is too old and is difficult to expand

6. Component extension problem: There is no friendly extension solution for the current hot component implementations like Vue and React. 

In order to solve the above problems, embarked on the road of making wheels. . .

## Why not use the standard json-schema?

Because json-schema is data-oriented rather than form (ui), it is not very friendly for declaring a form.

For a form, care about what the form items are, what the form items look like, what are the validation rules, all these are related to the fields. The most intuitive management is in one place

Come to a simple comparison:

- json-schema example：

![json-schema sample](http://daniel-test.image.alimmdn.com/ncform/jsonschema-sample@400w?spm=a312x.7755591.0.0.502b4e08LPhKHt)

- ncform example：

![ncform sample](http://daniel-test.image.alimmdn.com/ncform/ncform-sample@400w?spm=a312x.7755591.0.0.502b4e08LPhKHt)

Json-schema for validation rules, declared in various places, not well managed. And ncform is concentrated in rules field. This design is also convenient for later development of form development IDE

## dx expression：

With `dx` expressions, you can get the value of the specified field with `{{$root.xxx}}` and then write your arbitrary logical expression with the native JS.

- Specify the attribute value in the object, for example：
```
disabled: 'dx: {{$root.person.age}} < 18'
```

- Specify the value of an item in the array, for example:
```
disabled: 'dx: {{$root.persons[0].age}} < 18'
```

- Specify the properties of the same item in the array, for example:
```
disabled: 'dx: {{$root.persons[i].age}} < 18'
disabled: 'dx: {{$root.persons[i + 1].age}} < 18'
```

- Access constant data in the global configuration, for example:

```
disabled: 'dx: {{$root.person.age}} === {{$const.max}}'

// The global configuration is as follows
globalConfig: {
  constants: { max: 18 }
}
```

## Design Thinking

ncform = ncform container + ncform theme standard component

![design](http://daniel-test.image.alimmdn.com/ncform/design.png)

A system project generally uses a UI library (such as vue) and a UI implementation (such as elementui)
In order to live in peace with it, ncform's standard components can use the same UI implementation

The ncform Vue version provides the standard components of the elementui theme by default [[Click to view]](https://ncform.github.io/ncform/ncform-theme-elementui/index.html)

If you are a fan of iview, you can develop standard components of the iview theme by following the specifications of the ncform standard components.

Thought: "Throw in" the standard components of various themes into the ncform container, which is a nice tool for developing forms.

## Schema Generator

You can accelerate the speed of writing form schemas with [Schema Generator](https://ncform.github.io/ncform/ncform-show/schema-gen/index.html)

## References

- [json-schema](http://json-schema.org/)
- [jsonform](https://github.com/joshfire/jsonform)
- [json-editor](https://github.com/jdorn/json-editor)
- [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form)
- [angular-schema-form](https://github.com/json-schema-form/angular-schema-form)

## Authors

- [Daniel.xiao](https://github.com/daniel-dx) : ncform designer and main implementer
- Kyle.lo : The implementer of the ncform form validation part and the main developer of the standard component