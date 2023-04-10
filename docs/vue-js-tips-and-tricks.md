---
title: Vue.js tips and tricks
tags: [vue, vuejs, vue.js, vue3]
---
# {{ $frontmatter.title }}

## **Vue CLI**

```bash
npm install -g @vue/cli @vue/cli-service-global

vue ui
vue create my-exaple-project

vue add eslint
# eslint => @vue/eslint => @vue/cli-plugin-eslint
vue add cli-plugin-eslint

# installs and invokes vue-cli-plugin-apollo
vue add apollo
```

+ `browser-extension` [https://npm.im/vue-cli-plugin-browser-extension](https://npm.im/vue-cli-plugin-browser-extension)
+ Vue Composition API [https://npm.im/@vue/composition-api](https://npm.im/@vue/composition-api)

*   [How to Make a Chrome Extension with Vue.js](https://medium.com/javascript-in-plain-english/how-to-make-a-chrome-extension-with-vue-js-56e50bd97972)

## **Bootstrap** table style not working?

Use `<thead>` and `<tbody>`.

## **v-model** in Components (+ Composition API)

### In browser

```js
Vue.use(vueCompositionApi.default);
const {computed} = vueCompositionApi
```

### HTML:
```html
<div id="app">
  <foo v-model="fooVal"></foo>
    <foo :value="fooVal" @input="fooVal = $event"></foo>

  <bar v-model="barVal"></bar>
    <bar :lorem="barVal" @ipsum="barVal = $event"></bar>

  <lol :x="fooVal" :y="barVal" v-model="lolVal"></lol>
    <lol :x="fooVal" :y="barVal" :z="lolVal" @input="lolVal = $event"></lol>
</div>
```

## **Vue.js 2** ([_test_](https://codepen.io/gander/pen/eYYVgKJ))

```js
Vue.component("foo", {
  template: `<button @click="increment">{{ value }}</button>`,
  props: {
    value: Number
  },
  methods: {
    increment() {
      this.$emit("input", this.value + 1);
    }
  }
});

Vue.component("bar", {
  template: `<button @click="increment">{{ lorem }}</button>`,
  props: {
    lorem: Number
  },
  model: {
    prop: "lorem",
    event: "ipsum"
  },
  methods: {
    increment() {
      this.$emit("ipsum", this.lorem * 2);
    }
  }
});

Vue.component("lol", {
  template: `<button @click="sum">{{ z }}</button>`,
  props: {
    x: Number,
    y: Number,
    z: Number
  },
  model: {
    prop: "z"
  },
  methods: {
    sum() {
      this.$emit("input", this.x + this.y);
    }
  }
});

new Vue({
  el: "#app",
  data: {
    fooVal: 1,
    barVal: 1,
    lolVal: 0
  }
});
```

## **Vue.js 3 / Composition API** ([_test_](https://codepen.io/gander/pen/oNNEPBy))

```js
// vueCompositionApi => Vue.js 2.x plugin

Vue.use(vueCompositionApi.default);

Vue.component("foo", {
  template: `<button @click="increment">{{ value }}</button>`,
  props: {
    value: Number
  },
  setup: (props, context) => ({
    increment: () => context.emit("input", props.value + 1)
  })
});

Vue.component("bar", {
  template: `<button @click="increment">{{ lorem }}</button>`,
  props: {
    lorem: Number
  },
  model: {
    prop: "lorem",
    event: "ipsum"
  },
  setup: (props, context) => ({
    increment: () => context.emit("ipsum", props.lorem * 2)
  })
});

Vue.component("lol", {
  template: `<button @click="sum">{{ z }}</button>`,
  props: {
    x: Number,
    y: Number,
    z: Number
  },
  model: {
    prop: "z"
  },
  setup: (props, context) => ({
    sum: () => context.emit("input", props.x + props.y)
  })
});

new Vue({
  el: "#app",
  data: {
    fooVal: 1,
    barVal: 1,
    lolVal: 0
  }
});
```

Sources:

*   [https://scotch.io/tutorials/add-v-model-support-to-custom-vuejs-component](https://scotch.io/tutorials/add-v-model-support-to-custom-vuejs-component)
*   [https://vuejs.org/v2/api/#model](https://vuejs.org/v2/api/#model)
*   [https://medium.com/js-dojo/7-ways-to-define-a-component-template-in-vuejs-c04e0c72900d](https://medium.com/js-dojo/7-ways-to-define-a-component-template-in-vuejs-c04e0c72900d)

*   [https://vuejs.org/v2/api/#v-model](https://vuejs.org/v2/api/#v-model)
    *   [https://vuejs.org/v2/api/#v-bind](https://vuejs.org/v2/api/#v-bind)
    *   [https://vuejs.org/v2/api/#v-on](https://vuejs.org/v2/api/#v-on)

## Init with data from **dataset**

```js
export default {
    data() {
        return {
            id: this['$root']['$el']['dataset']['id'],
        };
    },
};
```

### Version 2:

`index.html`:

```html
<div id="app" data-id="123"></div>
```

`index.js`:

```js
(function (el) {

    new Vue({
        el,
        render: h => h(Module),
        data: () => Object.assign({}, el.dataset) ,
    });

})(document.getElementById('app'));
```

`Module.vue`:

```js
export default {
    name: 'Module',
    data() {
        return {
            id: this.$parent.id,
        };
    },
};
```

### Version 3:

```js
(function (el) {

    new Vue({
        el: el,
        render: h => h(Module),
        propsData: {
            ...el.dataset
        }
    });

})(document.getElementById('app'));
```

### Version 4:

```js
(function (el) {
    new Vue({el, render: h => h(Module, {props: {...el.dataset}})});
})(document.getElementById('app'));

// Module.vue
export default {
  props: {
    id: {
      type: String,
      required: true,
      validator: v => /^\d+$/.test(v),
    },
  },
};
```

### Version 5 (Vue 3.x) \[[example](https://jsfiddle.net/gander/ar2vdb6u)\]:

```html
<div id="foo">EXAMPLE #1</div>
<div id="bar" data-firstname="Evan" data-lastname="You">EXAMPLE #2</div>
```
```js
function initApp(root) {
  Vue.createApp({
    props: {
      firstname: {
        type: String,
        default: 'John'
      },
      lastname: {
        type: String,
        default: 'Doe'
      }
    },
    template: '{{ firstname }} {{ lastname }}'
  }, root.dataset).mount(root);
}

initApp(document.getElementById('foo'));
initApp(document.getElementById('bar'));
```

Result:
```html
<div id="foo">John Doe</div>
<div id="bar" data-firstname="Evan" data-lastname="You">Evan You</div>
```


