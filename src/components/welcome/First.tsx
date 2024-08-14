import { defineComponent } from 'vue';
import s from './First.module.scss';
import arrowSvg from '../../assets/icons/arrow-right.svg'
export const First = defineComponent({
  setup: (props, context) => {
    return () => (
        <>
            <div class={s.wrapper}>
                Simple way to manage you money
            </div>
            <div class={s.main}>
                More than 100 million users with 1,000 thousand parthners services in the world
            </div>
            <div class={s.footer}>
              <button class={s.skip}>Skip</button>
              <div class={s['ellipse-group']}>
                <div class={[s.ellipse, s.active]}></div>
                <div class={s.ellipse}></div>
                <div class={s.ellipse}></div>
              </div>
              <button class={s.next}>
                <img src={arrowSvg} alt="" />
              </button>
            </div>
        </>
      
    )
  }
})