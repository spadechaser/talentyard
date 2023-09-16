import { BoltIcon, ChartBarSquareIcon, ChevronUpDownIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Features() {
    return (
        <div className='flex flex-col lg:flex-row mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='w-1/2'>
                <div className='space-y-3'>
                    <h2 className='font-semibold text-5xl'>Access Top Talents,On Demand</h2>
                    <p className='font-extralight'>Easily build your team with top talents, also integrate talent into an existing team.</p>
                </div>
                <div className='flex justify-between w-full space-x-12 mt-12'>
                    <div className='w-1/2'>
                        <BoltIcon width={75} height={75} strokeWidth={0.5} color='red' />
                        <p className='font-extralight'>Ut est amet mollit laborum laborum sit non commodo ipsum fugiat nisi ut. Excepteur qui labore nisi irure id sit non elit. Sint id amet ex dolore mollit sint occaecat incididunt laboris eu laboris aliquip.</p>
                    </div>
                    <div className='w-1/2'>
                        <ChevronUpDownIcon width={75} height={75} strokeWidth={0.5} color='red'/>
                        <p className='font-extralight'>Ut est amet mollit laborum laborum sit non commodo ipsum fugiat nisi ut. Excepteur qui labore nisi irure id sit non elit. Sint id amet ex dolore mollit sint occaecat incididunt laboris eu laboris aliquip.</p>
                    </div>
                </div>
                <div className='flex justify-between w-full space-x-12 mt-12'>
                    <div className='w-1/2'>
                        <ChartBarSquareIcon width={75} height={75} strokeWidth={0.5} color='red'/>
                        <p className='font-extralight'>Ut est amet mollit laborum laborum sit non commodo ipsum fugiat nisi ut. Excepteur qui labore nisi irure id sit non elit. Sint id amet ex dolore mollit sint occaecat incididunt laboris eu laboris aliquip.</p>
                    </div>
                    <div className='w-1/2'>
                        <PresentationChartLineIcon width={75} height={75} strokeWidth={0.5} color='red'/>
                        <p className='font-extralight'>Ut est amet mollit laborum laborum sit non commodo ipsum fugiat nisi ut. Excepteur qui labore nisi irure id sit non elit. Sint id amet ex dolore mollit sint occaecat incididunt laboris eu laboris aliquip.</p>
                    </div>
                </div>
            </div>
            <div className='w-1/2'></div>
        </div>
    )
}
