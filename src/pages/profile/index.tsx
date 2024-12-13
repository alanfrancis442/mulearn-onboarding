import { PointsGroup } from '@/components/points';
import { ChevronLeft, EditIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const profilePic = undefined
    const name = 'Edwin Emmanuel Roy'
    return (
        <div className='flex flex-col p-4 pt-6 gap-9'>
            <ChevronLeft className=''
                onClick={() => navigate(-1)}
            />
            <div className='gap-4 flex-1 flex'>
                <img src={profilePic || "/profile.webp"} alt="" height={60} width={60}
                    className='overflow-hidden rounded-full bg-orange-300'
                />
                <div className='flex-1 flex flex-col gap-2'>
                    <div className='font-semibold text-xl'>{name}</div>
                    <div className='text-xs underline'>View Public Profile</div>
                </div>
                <div className=''>
                    <EditIcon className=' text-primary' strokeWidth={1.5} />
                </div>
            </div>
            <PointsGroup
                scores={{
                    karma: '24.56K',
                    avg_karma: '2.59K',
                    rank: '14458'
                }} />
            <div className="flex flex-col gap-6 ">
                {items.map((item, index) => <ColorBox

                    key={index}
                    label={item.label}
                    src={item.src}
                    color={item.color}
                >
                    {item?.children}
                </ColorBox>)
                }
            </div>
            <ColorBox className='mt-12' label='Log Out' src='path/to/logout-icon.svg' color='bg-[iii#FFC6C6]' />
        </div>
    )
}

export default Profile

const ColorBox = ({ children, label, src, color, className, ...props }: {
    label: string,
    src: string,
    color: string
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return (

        <div className={`${className} flex gap-4 items-center`} {...props}>
            <div className={`p-2 w-10 h-10 ${color} rounded-[8px]`}>
                <img src={src} width={'100%'} height={'100%'} />
            </div>
            <div className='text-sm flex-1'>{label}</div>
            {children}
        </div>
    )
}

const items = [
    {
        label: "Karma Points Transactions",
        src: "path/to/karma-points-icon.svg", // Replace with actual path
        color: "bg-[#FFF5C1]",

    },
    {
        label: "Change Career Path",
        src: "path/to/change-career-icon.svg", // Replace with actual path
        color: "bg-[#FFDCC1i]",
        children: <a className='text-xs underline text-primary'>Software Engineer</a>
    },
    {
        label: "Learning Circle Attendance",
        src: "path/to/learning-circle-icon.svg", // Replace with actual path
        color: "bg-[#C0E6FFi]"
    },
    {
        label: "Notifications",
        src: "path/to/notifications-icon.svg", // Replace with actual path
        color: "bg-[#BBFFD6]"
    },
    {
        label: "Privacy and Security",
        src: "path/to/privacy-security-icon.svg", // Replace with actual path
        color: "bg-[#ECCEFF]"
    },
    {
        label: "FAQ and Support",
        src: "path/to/faq-support-icon.svg", // Replace with actual path
        color: "bg-[#EAFFB4]"
    },
];