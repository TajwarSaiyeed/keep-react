'use client'
import { Legend, LegendProps, ResponsiveContainer, Tooltip } from 'recharts'

import {
  ComponentProps,
  ComponentType,
  createContext,
  CSSProperties,
  forwardRef,
  ReactNode,
  useContext,
  useId,
  useMemo,
} from 'react'
import { cn } from '../../utils/cn'

const THEMES = { light: '', dark: '.dark' } as const

export type ChartConfig = {
  [k in string]: {
    label?: ReactNode
    icon?: ComponentType
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof THEMES, string> })
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = createContext<ChartContextProps | null>(null)

function useChart() {
  const context = useContext(ChartContext)

  if (!context) {
    throw new Error('useChart must be used within a <ChartContainer />')
  }

  return context
}

const ChartContainer = forwardRef<
  HTMLDivElement,
  ComponentProps<'div'> & {
    config: ChartConfig
    children: ComponentProps<typeof ResponsiveContainer>['children']
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = useId()
  const chartId = `chart-${id ?? uniqueId.replace(/:/g, '')}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-body-5 [&_.recharts-cartesian-axis-tick_text]:fill-metal-600 dark:[&_.recharts-cartesian-axis-tick_text]:fill-metal-300 [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-metal-50 dark:[&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-metal-900 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-metal-100 [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-metal-50 [&_.recharts-radial-bar-background-sector]:fill-metal-100 [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-metal-50 dark:[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-metal-800 [&_.recharts-reference-line_[stroke='#ccc']]:stroke-metal-100 [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}>
        <ChartStyle id={chartId} config={config} />
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = 'Chart'

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, config]) => config.theme || config.color)

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ?? itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join('\n')}
}
`,
          )
          .join('\n'),
      }}
    />
  )
}

const ChartTooltip = Tooltip

const ChartTooltipContent = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof Tooltip> &
    ComponentProps<'div'> & {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: 'line' | 'dot' | 'dashed'
      nameKey?: string
      labelKey?: string
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = 'dot',
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart()

    const tooltipLabel = useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const [item] = payload
      const key = `${labelKey ?? item.dataKey ?? item.name ?? 'value'}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value = !labelKey && typeof label === 'string' ? config[label]?.label || label : itemConfig?.label

      if (labelFormatter) {
        return (
          <div className={cn('font-medium text-metal-900 dark:text-white', labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }

      if (!value) {
        return null
      }

      return <div className={cn('font-medium text-metal-900 dark:text-white', labelClassName)}>{value}</div>
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey])

    if (!active || !payload?.length) {
      return null
    }

    const nestLabel = payload.length === 1 && indicator !== 'dot'

    return (
      <div
        ref={ref}
        className={cn(
          'grid min-w-[10rem] items-start gap-1.5 rounded-lg border border-metal-100 bg-metal-25 px-3.5 py-2.5 text-body-5 font-medium shadow-xl dark:border-metal-900 dark:bg-black',
          className,
        )}>
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey ?? item.name ?? item.dataKey ?? 'value'}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color ?? (item.payload.fill || item.color)

            return (
              <div
                key={item.dataKey}
                className={cn(
                  'flex w-full flex-wrap items-stretch gap-2 text-metal-900 dark:text-white [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-metal-600 dark:[&>svg]:text-metal-300 ',
                  indicator === 'dot' && 'items-center',
                )}>
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn('shrink-0 rounded-[2px] border-metal-100 bg-[--color-bg]', {
                            'h-2.5 w-2.5': indicator === 'dot',
                            'w-1': indicator === 'line',
                            'w-0 border-[1.5px] border-dashed bg-transparent': indicator === 'dashed',
                            'my-0.5': nestLabel && indicator === 'dashed',
                          })}
                          style={
                            {
                              '--color-bg': indicatorColor,
                              '--color-border': indicatorColor,
                            } as CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        'flex flex-1 justify-between leading-none',
                        nestLabel ? 'items-end' : 'items-center',
                      )}>
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-metal-600 dark:text-metal-300">{itemConfig?.label || item.name}</span>
                      </div>
                      {item.value && (
                        <span className="font-medium tabular-nums text-metal-600 dark:text-metal-300">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  },
)
ChartTooltipContent.displayName = 'ChartTooltip'

const ChartLegend = Legend

const ChartLegendContent = forwardRef<
  HTMLDivElement,
  ComponentProps<'div'> &
    Pick<LegendProps, 'payload' | 'verticalAlign'> & {
      hideIcon?: boolean
      nameKey?: string
    }
>(({ className, hideIcon = false, payload, verticalAlign = 'top', nameKey }, ref) => {
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }

  return (
    <div
      ref={ref}
      className={cn('flex items-center justify-start gap-4', verticalAlign === 'top' ? 'pb-5' : 'pt-3', className)}>
      {payload.map((item) => {
        const key = `${nameKey ?? (item.dataKey || 'value')}`
        const itemConfig = getPayloadConfigFromPayload(config, item, key)

        return (
          <div
            key={item.value}
            className={cn(
              'flex items-center gap-1.5 text-metal-600 dark:text-metal-300 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-metal-600',
            )}>
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        )
      })}
    </div>
  )
})
ChartLegendContent.displayName = 'ChartLegend'

function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== 'object' || payload === null) {
    return undefined
  }

  const payloadPayload =
    'payload' in payload && typeof payload.payload === 'object' && payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (key in payload && typeof payload[key as keyof typeof payload] === 'string') {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === 'string'
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string
  }

  return configLabelKey in config ? config[configLabelKey] : config[key]
}

export { ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent }
