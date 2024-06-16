import { Input } from '@headlessui/react'

function BaseInput() {
    return <Input name="full_name" type="text" className="data-[focus]:outline-2 mt-3 block w-full rounded-lg border-none" />
}

export default BaseInput