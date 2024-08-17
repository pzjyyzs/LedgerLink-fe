import { defineComponent } from 'vue';
import s from './First.module.scss';
import arrowSvg from '../../assets/icons/arrow-right.svg'
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
export const First = defineComponent({
  setup: (props, context) => {
    const slots = {
      title: () => 'Simple way to manage you money',
      subTitle: () => 'More than 100 million users with 1,000 thousand parthners services in the world',
      buttons: () => <><RouterLink class={s.skip} to="/start">Skip</RouterLink>
      <div class={s['ellipse-group']}>
        <div class={[s.ellipse, s.active]}></div>
        <div class={s.ellipse}></div>
        <div class={s.ellipse}></div>
      </div>
      <RouterLink class={s.next} to="/welcome/2">
        <img src={arrowSvg} alt="" />
      </RouterLink></>
    }
    return () => (
        <WelcomeLayout v-slots={slots}></WelcomeLayout>
    )
  }
})