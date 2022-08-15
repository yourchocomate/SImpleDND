import { Switch } from '@headlessui/react'

const SwitchCheckBox = ({checked,onChange}) => {

  return (
    <div className="py-2">
      <Switch
        checked={checked}
        onChange={onChange}
        className={`${checked ? 'bg-[#00c49f]' : 'bg-[#ccc]'}
          relative inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${checked ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}

export default SwitchCheckBox;
