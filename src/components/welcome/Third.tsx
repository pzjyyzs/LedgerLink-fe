import { defineComponent } from 'vue';
import s from './First.module.scss';
export const Third = defineComponent({
  setup: (props, context) => {
    return () => (
        <>
            <div class={s.wrapper}>
            Efficiently and conveniently manage your money.
            </div>
            <div class={s.main}>
            Experience seamless integration with top-tier partners.
            </div>
        </>
      
    )
  }
})