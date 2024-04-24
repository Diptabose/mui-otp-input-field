import { useCallback, useState } from 'react'




export interface UseFocusProps {
    selector?: string,
    enable?: boolean,
}



export const useFocus = ({
    enable,
    selector = 'otp-container',
}: UseFocusProps) => {



    const focus = useCallback((index: number) => {

        console.log("The index is", index);
        if (enable) {
            const container = document.getElementById(selector);
            const inputFields = container?.querySelectorAll('input');
            if (inputFields) {
                const fieldAtIndex = inputFields[index];
                fieldAtIndex && fieldAtIndex.focus();
            }
        }
    }, [])





    return { focus }

}




