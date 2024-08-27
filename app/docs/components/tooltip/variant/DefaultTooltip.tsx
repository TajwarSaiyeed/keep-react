import { Tooltip, TooltipAction, TooltipContent } from '../../../../src'

const DefaultTooltip = () => {
  return (
    <div className="flex h-44 items-center justify-center">
      <Tooltip>
        <TooltipAction>Tooltip</TooltipAction>
        <TooltipContent>
          <p className="text-body-5 font-medium text-white">Tooltips - Title here</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

const DefaultTooltipCode = {
  'TooltipComponent.tsx': `
import { Tooltip, TooltipAction, TooltipContent } from 'keep-react'

export const TooltipComponent = () => {
  return (
    <Tooltip>
      <TooltipAction>Tooltip</TooltipAction>
      <TooltipContent>
        <p className="text-body-5 font-medium text-white">Tooltips - Title here</p>
      </TooltipContent>
    </Tooltip>
  )
}

`,
}

export { DefaultTooltip, DefaultTooltipCode }
