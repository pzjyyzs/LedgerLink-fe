import { defineComponent, ref, watchEffect } from 'vue';
import s from './layout.module.scss';
import { useSwipe } from '../../hooks/useSwipe';
import { useRouter } from 'vue-router';

export const First = defineComponent({
  setup: (props, context) => {
    const div = ref<HTMLDivElement>();
    const router = useRouter();
    const { swiping, direction } = useSwipe(div, {
      beforeStart: e => e.preventDefault()
    })
    watchEffect(() => {
      if (swiping.value && direction.value === 'left') {
        router.push('/welcome/2')
      }
    })
    return () => (
      <div class={s.wrapper} ref={div}>
          <div class={s.title}>
              Simple way to manage you money
          </div>
          <div class={s['sub-title']}>
            More than 100 million users with 1,000 thousand parthners services in the world
          </div>
      </div>
    )
  }
})