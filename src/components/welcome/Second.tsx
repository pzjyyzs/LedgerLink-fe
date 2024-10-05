import { defineComponent, ref, watchEffect } from 'vue';
import s from './layout.module.scss';
import { useRouter } from 'vue-router';
import { useSwipe } from '../../hooks/useSwipe';
export const Second = defineComponent({
  setup: (props, context) => {
    const div = ref<HTMLDivElement>();
    const router = useRouter();
    const { swiping, direction } = useSwipe(div, {
      beforeStart: e => e.preventDefault()
    })
    watchEffect(() => {
      if (swiping.value && direction.value === 'left') {
        router.push('/welcome/3')
      }
    })
    return () => (
      <div class={s.wrapper} ref={div}>
        <div class={s.title}>
          Easily take control of your financial situation.
        </div>
        <div class={s['sub-title']}>
          Join a global community of satisfied users.
        </div>
      </div>
    )
  }
})