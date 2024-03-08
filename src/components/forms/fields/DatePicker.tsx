import { DatePicker as AntdDatePicker } from 'antd'
import dayjs from 'dayjs'
import { FC } from 'react'
import { useController } from 'react-hook-form'

import {
  DatePickerProps,
  MonthPickerProps,
  RangePickerProps,
  WeekPickerProps,
} from '../../../types/RhfInputTypes'

const _DatePicker: FC<DatePickerProps> = (props) => {
  const { name, ...restProps } = props

  const {
    field: { value, onChange, ...restField },
  } = useController({ name })

  return (
    <AntdDatePicker
      value={value ? dayjs(value) : undefined}
      onChange={(date) => {
        onChange(date ? date.toISOString : null)
      }}
      {...restField}
      {...restProps}
    />
  )
}

const MonthPicker: FC<MonthPickerProps> = (props) => {
  const { name, ...restProps } = props

  const {
    field: { value, onChange, ...restField },
  } = useController({ name })

  return (
    <AntdDatePicker.MonthPicker
      value={value ? dayjs(value) : undefined}
      onChange={(date) => {
        onChange(date ? date.toISOString : null)
      }}
      {...restField}
      {...restProps}
    />
  )
}

const RangePicker: FC<RangePickerProps> = (props) => {
  const { name, ...restProps } = props

  const {
    field: { value, onChange, ...restField },
  } = useController({ name })

  return (
    <AntdDatePicker.RangePicker
      value={value}
      onChange={(dates) => {
        onChange(dates)
      }}
      {...restField}
      {...restProps}
    />
  )
}

const WeekPicker: FC<WeekPickerProps> = (props) => {
  const { name, ...restProps } = props

  const {
    field: { value, onChange, ...restField },
  } = useController({ name })

  return (
    <AntdDatePicker.WeekPicker
      value={value}
      onChange={(date) => {
        onChange(date)
      }}
      {...restField}
      {...restProps}
    />
  )
}

const DatePicker = Object.assign(_DatePicker, {
  MonthPicker,
  RangePicker,
  WeekPicker,
})

export default DatePicker
