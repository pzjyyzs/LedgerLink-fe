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
           buttons: () => <> </>
        }}
      </WelcomeLayout>
    )
  }
})