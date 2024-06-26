import { Button } from '@headlessui/react'

function BaseButton({
    children,
    className,
    ...props
}) {
    return (
        <Button {...props} className={`rounded bg-slate-200 py-2 px-4 text-sm text-black data-[hover]:bg-slate-400 ${className}`}>
            {children}
        </Button>
    )
}

export default BaseButton