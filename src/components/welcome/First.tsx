import { defineComponent } from 'vue';

import { WelcomeLayout } from './WelcomeLayout';
export const First = defineComponent({
  setup: (props, context) => {
    return () => (
        <WelcomeLayout>
          {{
            title: () => 'Simple way to manage you money',
            subTitle: () => 'More than 100 million users with 1,000 thousand parthners services in the world',
          }}
        </WelcomeLayout>
    )
  }
})