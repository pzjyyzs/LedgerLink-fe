import { defineComponent } from 'vue';
import s from './layout.module.scss';
import arrowSvg from '../../assets/icons/arrow-right.svg'
import { RouterLink } from 'vue-router';
export const ThirdAction = defineComponent({
  setup: (props, context) => {
    return () => (
        <div class={s.footer}>
            <RouterLink class={s.skip} to="/start">Skip</RouterLink>
            <div class={s['ellipse-group']}>
                <div class={s.ellipse}></div>
                <div class={s.ellipse}></div>
                <div class={[s.ellipse, s.active]}></div>
           </div>
           <RouterLink class={s.next} to="/start">
             <img src={arrowSvg} alt="" />
           </RouterLink>
      </div>
    )
  }
})