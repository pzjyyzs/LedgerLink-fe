import { defineComponent } from 'vue';
import s from './layout.module.scss';
export const WelcomeLayout = defineComponent({
  setup: (props, context) => {
    const { slots } = context;
    return () => (
        <>
          <div class={s.wrapper}>
            <div class={s.title}>
                {slots.title?.()}
            </div>
            <div class={s['sub-title']}>
                {slots.subTitle?.()}
            </div>
          </div>
            
            <div class={s.footer}>
                { slots.buttons?.() }
            </div>
        </>
      
    )
  }
})