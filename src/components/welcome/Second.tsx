import { defineComponent } from 'vue';
import s from './layout.module.scss';
import { RouterLink } from 'vue-router';
import arrowSvg from '../../assets/icons/arrow-right.svg';
import { WelcomeLayout } from './WelcomeLayout';
export const Second = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout>
        {{
          title: () => 'Easily take control of your financial situation.',
          subTitle: () => 'Join a global community of satisfied users.',
          buttons: () => <><RouterLink class={s.skip} to="/start">Skip</RouterLink>
          <div class={s['ellipse-group']}>
            <div class={s.ellipse}></div>
            <div class={[s.ellipse, s.active]}></div>
            <div class={s.ellipse}></div>
          </div>
          <RouterLink class={s.next} to="/welcome/3">
            <img src={arrowSvg} alt="" />
          </RouterLink></>
        }}
      </WelcomeLayout>
    )
  }
})