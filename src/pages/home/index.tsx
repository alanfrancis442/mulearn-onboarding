import React from 'react'

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
const Home = () => {
    const [name, karma, avg_karma, rank] = ['Edwin', '24.56K', '2.59K', '14458']
    return (
        <div className=' min-h-svh' >
            <div className="flex flex-col justify-end items-center text-center gap-2 p-6 text-white bg-gradient-to-b from-transparent to-[#3187F4] bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(181deg, rgba(49, 135, 244, 0.00) 53.37%, #3187F4 99.16%), url('/home.svg')`,
                    aspectRatio: 414 / 536,
                    width: '100%'
                }}
            >
                <div>Hey {name}</div>
                <div>"The only person you are destined to become is the person you decide to be."</div>
            </div>
            <div className='mt-[50px] px-4 flex items-center justify-center gap-2'>
                <Points label="Karma Points" >{karma}</Points>
                <Points label="Avg Karma/Month" >{avg_karma}</Points>
                <Points label="Ranking" >{rank}</Points>
            </div>
        </div>
    )
}


const Points = ({ label, children, className, ...props }: DivProps & { label: string }) => {
    return (
        <div className={`p-[10px] text-center text-black flex flex-col gap-1 ${className}`} {...props}>
            <div className='text-xs' >
                {label}
            </div>
            <div className='text-2xl font-[700]' >
                {children}
            </div>
        </div>
    )
}
export default Home