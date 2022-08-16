import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useBase, useChart } from '../../hooks'
import { layouts } from '../sections/AUChartLayouts'

const Segmentation = () => {

  const navigate = useNavigate();
  const { setChartSegmentation } = useBase();
  const { resetChartGridLayout } = useChart();

  const handleClick = (name) => {
    setChartSegmentation(name);
  }

  const segmentations = [
    {name: "Country" , key: "country"},
    {name: "Gender" , key: "gender"},
    {name: "Device" , key: "device"},
  ]

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#00c49f]">
          Segmentation
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          
            <div className="py-1">
              <Menu.Item>
                <a onClick={() => resetChartGridLayout()} className="text-red-700 block px-4 py-2 text-sm">Reset</a>
              </Menu.Item>
            </div>
            {segmentations.map(s => (
            <div className="py-1" key={s.key}>
              <Menu.Item>
                <a onClick={() => handleClick(s.key)} className="text-gray-700 block px-4 py-2 text-sm">{s.name}</a>
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Segmentation;