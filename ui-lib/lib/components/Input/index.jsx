import { Description, Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'

function BaseInput({
    label = 'Label',
    value,
    onChange,
}) {
    const onInputChange = (e) => onChange(e.target.value)

    return (
        <div className="w-full max-w-md px-4 ">
            <Field className="flex flex-col items-start">
                <Label className="text-sm/6 font-medium">
                    {label}
                </Label>
                <Input
                    className="mt-3 block w-full rounded-lg border border-black"
                    value={value}
                    onChange={onInputChange}
                />
            </Field>
        </div>
    )
}

export default BaseInput