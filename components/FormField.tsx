import React from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'file';
}

const FormField = ({ control, name, label, placeholder, type
     = 'text'}: FormFieldProps<T>) => (

    <Controller 
        control={control} 
        name={name} 
        render={({ field }) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                <Input className='input' type={type} placeholder={placeholder} {...field} />
                </FormControl>
                <FormMessage />
            </FormItem> 
        )}
    />
)


export default FormField
