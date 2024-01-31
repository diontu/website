import { debounce } from '@/utils/utils'
import { useEffect, useState } from 'react'

// value is based on the 'sm' breakpoint used in tailwind based on the width
const mobileThreshold = 640

const crossedThreshold = (value: number): boolean => {
    return value >= mobileThreshold
}

const isMobile = (): boolean => {
    const [mobile, setMobile] = useState(!crossedThreshold(window.innerWidth))
    const debouncedSetMobile = debounce(setMobile, 50)
    useEffect(() => {
        const onResizeListener = (event: Event) => {
            const windowTarget = event.target as Window
            if (crossedThreshold(windowTarget.innerWidth)) {
                debouncedSetMobile(false)
            } else if (!crossedThreshold(windowTarget.innerWidth)) {
                debouncedSetMobile(true)
            }
        }
        window.addEventListener('resize', onResizeListener)
        return () => {
            window.removeEventListener('resize', onResizeListener)
        }
    }, [])
    return mobile
}

export default isMobile
