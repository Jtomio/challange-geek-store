import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <FaWhatsapp className="h-6 w-6" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <FaInstagram className="h-6 w-6" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <SiGmail className="h-6 w-6" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
