declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'element-ui/lib/locale/lang/*' {
  export const elementLocale: any;
}

declare module '*.gif' {
  export const gif: any;
}

// TODO: remove this part after vue-count-to has its typescript file
declare module 'vue-count-to';

// TODO: remove this part after vuedraggable has its typescript file
declare module 'vuedraggable';

// TODO: remove this part after vue2-dropzone has its typescript file
declare module 'vue2-dropzone';

// TODO: remove this part after vue-image-crop-upload has its typescript file
declare module 'vue-image-crop-upload';

// declare module 'vue/types/vue' {
//   // 相当于Vue.$eventBus
//   interface Vue {
//     $eventBus: Vue;
//   }

//   // 相当于在Vue.prototype.$eventBus
//   interface VueConstructor {
//     $eventBus: Vue;
//   }
// }
