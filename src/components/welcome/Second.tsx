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
          buttons: () => <></>
        }}
      </WelcomeLayout>
    )
  }
})