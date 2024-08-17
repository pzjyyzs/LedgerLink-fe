import { defineComponent } from 'vue';
import s from './First.module.scss';
import { RouterLink } from 'vue-router';
import arrowSvg from '../../assets/icons/arrow-right.svg';
import { WelcomeLayout } from './WelcomeLayout';
export const Third = defineComponent({
  setup: (props, context) => {
    const slots = {
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
    }
    return () => (
      <WelcomeLayout v-slots={slots}></WelcomeLayout>
    )
  }
})