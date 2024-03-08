import { InputNumberProps as AntdInputNumberProps } from 'antd/lib'
import { CheckboxProps as AntdCheckboxProps } from 'antd/lib/checkbox/Checkbox'
import { CheckboxGroupProps as AntdCheckboxGroupProps } from 'antd/lib/checkbox/Group'
import {
  DatePickerProps as AntdDatePickerProps,
  MonthPickerProps as AntdMonthPickerProps,
  RangePickerProps as AntdRangePickerProps,
  WeekPickerProps as AntdWeekPickerProps,
} from 'antd/lib/date-picker'
import {
  InputProps as AntdInputProps,
  PasswordProps as AntdPasswordProps,
  TextAreaProps as AntdTextAreaProps,
} from 'antd/lib/input'
import { SelectProps as AntdSelectProps } from 'antd/lib/select'
import { PropsWithChildren } from 'react'

export type NameRequired = {
  name: string
}

export type InputProps = AntdInputProps & NameRequired
export type PasswordProps = AntdPasswordProps & NameRequired
export type TextAreaProps = AntdTextAreaProps & NameRequired
export type CheckboxProps = AntdCheckboxProps & NameRequired
export type CheckboxGroupProps = AntdCheckboxGroupProps & NameRequired
export type InputNumberProps = AntdInputNumberProps & NameRequired
export type SelectProps = AntdSelectProps & NameRequired & PropsWithChildren
export type DatePickerProps = NameRequired & AntdDatePickerProps
export type MonthPickerProps = NameRequired & AntdMonthPickerProps
export type RangePickerProps = NameRequired & AntdRangePickerProps
export type WeekPickerProps = NameRequired & AntdWeekPickerProps
