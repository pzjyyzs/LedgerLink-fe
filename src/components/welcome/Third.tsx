import { defineComponent, ref, watchEffect } from 'vue';
import s from './layout.module.scss';
import { useRouter } from 'vue-router';
import { useSwipe } from '../../hooks/useSwipe';
export const Third = defineComponent({
  setup: (props, context) => {
    const div = ref<HTMLDivElement>();
    const router = useRouter();
    const { swiping, direction } = useSwipe(div, {
      beforeStart: e => e.preventDefault()
    })
    watchEffect(() => {
      if (swiping.value && direction.value === 'left') {
        router.push('/start')
      }
    })
    return () => (
      <div class={s.wrapper} ref={div}>
        <div class={s.title}>
          Efficiently and conveniently manage your money
        </div>
        <div class={s['sub-title']}>
          Experience seamless integration with top-tier partners.
        </div>
      </div>
    )
  }
})