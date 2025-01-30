import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command';

const manufacturers = [
  { value: 'Boticário', label: 'Boticário' },
  { value: 'Natura', label: 'Natura' },
  { value: 'Avon', label: 'Avon' },
];

export function ComboBox() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="flex-1 justify-between">
          {value
            ? manufacturers.find(
                (manufacturers) => manufacturers.value === value
              )?.label
            : 'Selecione uma marca...'}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
        <Command>
          <CommandInput placeholder="Pesquisar marca..." className="h-9" />
          <CommandList>
            <CommandEmpty>Nenhuma marca encontrada.</CommandEmpty>
            <CommandGroup>
              {manufacturers.map((manufacturer) => (
                <CommandItem
                  key={manufacturer.value}
                  value={manufacturer.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}>
                  {manufacturer.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === manufacturer.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
