import React from 'react'

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
type Score = {
    karma: string,
    avg_karma: string,
    rank: string
}
export const PointsGroup = ({ scores, className, ...props }: { scores: Score } & DivProps) => {
    return (
        <div className={`flex items-center justify-center gap-2 ${className}`} {...props}>
            <Points label="Karma Points" >{scores.karma}</Points>
            <Points label="Avg Karma/Month" >{scores.avg_karma}</Points>
            <Points label="Ranking" >
                <div className="text-[#0F993E]">
                    {scores.rank}
                </div>
            </Points>
        </div>
    )
}

const Points = ({ label, children, className, ...props }: DivProps & { label: string }) => {
    return (
        <div className={`p-[10px] text-center text-black flex flex-col gap-1 ${className}`} {...props}>
            <div className='max-[375px]:text-[9px] text-xs' >
                {label}
            </div>
            <div className='max-[375px]:text-[16px] text-2xl font-bold' >
                {children}
            </div>
        </div>
    )
}