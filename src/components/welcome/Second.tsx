import { defineComponent } from 'vue';
import s from './First.module.scss';
export const Second = defineComponent({
  setup: (props, context) => {
    return () => (
        <>
            <div class={s.wrapper}>
                Easily take control of your financial situation.
            </div>
            <div class={s.main}>
            Join a global community of satisfied users.
            </div>
        </>
    )
  }
})