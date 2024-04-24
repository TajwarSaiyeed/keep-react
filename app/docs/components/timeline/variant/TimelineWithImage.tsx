'use client'
import { Timeline } from '../../../../src'

const TimelineWithImage = () => {
  return (
    <div className="px-5 py-6">
      <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <p className="text-body-5 font-normal leading-[1.4] text-metal-400">September 23,2022</p>
            <h1 className="text-body-3 font-medium text-metal-900">Step 1 Completed</h1>
            <p className="text-body-4 font-normal text-metal-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
            <img src="https://picsum.photos/400/230?v=1" className="!mt-4 block rounded-xl" alt="item1" />
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <p className="text-body-5 font-normal leading-[1.4] text-metal-400">November 10, 2023</p>
            <h1 className="text-body-3 font-medium text-metal-900">Step 2 Completed</h1>
            <p className="text-body-4 font-normal text-metal-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
            <img src="https://picsum.photos/400/230?v=2" className="!mt-4 block rounded-xl" alt="item2" />
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <p className="text-body-5 font-normal leading-[1.4] text-metal-400">December 20,2023</p>
            <h1 className="text-body-3 font-medium text-metal-900">Step 3 Completed</h1>
            <p className="text-body-4 font-normal text-metal-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
            <img src="https://picsum.photos/400/230?v=3" className="!mt-4 block rounded-xl" alt="item3" />
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  )
}

const TimelineWithImageCode = `
'use client'
import { Timeline } from 'keep-react'

export const TimelineComponent = () => {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400">September 23,2022</p>
          <h1 className="text-body-3 font-medium text-metal-900">Step 1 Completed</h1>
          <p className="text-body-4 font-normal text-metal-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
          </p>
          <img src="https://picsum.photos/400/230?v=1" className="!mt-4 block rounded-xl" alt="item1" />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400">November 10, 2023</p>
          <h1 className="text-body-3 font-medium text-metal-900">Step 2 Completed</h1>
          <p className="text-body-4 font-normal text-metal-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
          </p>
          <img src="https://picsum.photos/400/230?v=2" className="!mt-4 block rounded-xl" alt="item2" />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <p className="text-body-5 font-normal leading-[1.4] text-metal-400">December 20,2023</p>
          <h1 className="text-body-3 font-medium text-metal-900">Step 3 Completed</h1>
          <p className="text-body-4 font-normal text-metal-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
          </p>
          <img src="https://picsum.photos/400/230?v=3" className="!mt-4 block rounded-xl" alt="item3" />
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  )
}

`
export { TimelineWithImage, TimelineWithImageCode }
