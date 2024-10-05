import { computed, onMounted, onUnmounted, ref, Ref } from "vue";

type Point = { x: number, y: number }
type Options = {
    beforeStart?: (e: TouchEvent) => void
    afterStart?: (e: TouchEvent) => void
    beforeMove?: (e: TouchEvent) => void
    afterMove?: (e: TouchEvent) => void
    beforeEnd?: (e: TouchEvent) => void
    afterEnd?: (e: TouchEvent) => void
}

export const useSwipe = (element: Ref<HTMLElement | undefined>, options?: Options) => {
    const start = ref<Point>()
    const end = ref<Point>()
    const swiping = ref(false)
    const distance = computed(() => {
        if (!swiping.value) {
            return 0
        }
        if (!start.value || !end.value) {
            return 0
        }
        return {
            x: end.value.x - start.value.x,
            y: end.value.y - start.value.y
        }
    })
    const direction = computed(() => {
        if (!distance.value) {
            return ''
        }
        const { x, y } = distance.value
        if (Math.abs(x) > Math.abs(y)) {
            return x > 0 ? 'right' : 'left'
        } else {
            return y > 0 ? 'down' : 'up'
        }
    })
    const startEvent = (e: TouchEvent) => {
        options?.beforeStart?.(e)
        end.value = start.value = { x: e.touches[0].screenX, y: e.touches[0].screenY }
        swiping.value = true
        options?.afterStart?.(e)
    }
    const moveEvent = (e: TouchEvent) => {
        options?.beforeMove?.(e)
        end.value = { x: e.touches[0].screenX, y: e.touches[0].screenY }
        options?.afterMove?.(e)
    }
    const endEvent = (e: TouchEvent) => {
        options?.beforeEnd?.(e)
        swiping.value = false
        start.value = undefined
        end.value = undefined
        options?.afterEnd?.(e)
    }
    onMounted(() => {
        if (!element.value) {
            return
        }
        element.value.addEventListener('touchstart', startEvent)
        element.value.addEventListener('touchmove', moveEvent)
        element.value.addEventListener('touchend', endEvent)
    })
    onUnmounted(() => {
        if (!element.value) {
            return
        }
        element.value.removeEventListener('touchstart', startEvent)
        element.value.removeEventListener('touchmove', moveEvent)
        element.value.removeEventListener('touchend', endEvent)
    })
    return {
        distance,
        direction,
        swiping,
        start,
        end
    }
}