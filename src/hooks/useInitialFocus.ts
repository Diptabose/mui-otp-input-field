import { useEffect } from 'react'
import { useFocus, UseFocusProps } from './useFocus'

export interface UseInitialFocus extends UseFocusProps {

}

export const useInitialFocus = ({ ...attr }: UseInitialFocus) => {

    const { focus } = useFocus({ ...attr });
    useEffect(() => {
        focus(0)
    }, [])
}

