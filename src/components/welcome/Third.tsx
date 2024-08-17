import { defineComponent } from 'vue';
import s from './layout.module.scss';
import { RouterLink } from 'vue-router';
import arrowSvg from '../../assets/icons/arrow-right.svg';
import { WelcomeLayout } from './WelcomeLayout';
export const Third = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout>
        {{
           title: () => 'Efficiently and conveniently manage your money.',
           subTitle: () => 'Experience seamless integration with top-tier partners.',
           buttons: () => <> <RouterLink class={s.skip} to="/start">Skip</RouterLink>
           <div class={s['ellipse-group']}>
             <div class={s.ellipse}></div>
             <div class={s.ellipse}></div>
             <div class={[s.ellipse, s.active]}></div>
           </div>
           <RouterLink class={s.next} to="/start">
             <img src={arrowSvg} alt="" />
           </RouterLink></>
        }}
      </WelcomeLayout>
    )
  }
})