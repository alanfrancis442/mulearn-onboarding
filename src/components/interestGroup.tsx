import { Button, ButtonProps } from './ui/button'

const InterestGroupsData = [
    { label: 'AI/ML', src: '/home.webp' },
    { label: 'UI/UX', src: '/home.webp' },
    { label: 'Cybersecurity', src: '/home.webp' },
    { label: 'Android Development', src: '/home.webp' },
    { label: 'Civil Engineering', src: '/home.webp' },
    { label: 'Digital Marketing', src: '/home.webp' },
]

export const InterestGroups = ({ className, buttonVariant, ...props }:
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        buttonVariant?: ButtonProps['variant']
    }
) => {
    return (
        <div className={`flex flex-col gap-6 ${className}`}  {...props}>
            <div className='text-sm font-semibold'>Your Interest Groups</div>
            <div className='grid grid-cols-3 gap-x-2 gap-y-4'>
                {InterestGroupsData.map((data, index) => <InterestGroupBox
                    src={data.src}
                    key={index}
                >
                    {data.label}
                </InterestGroupBox>
                )}
            </div>
            <Button
                size={"lg"}
                variant={buttonVariant}
                className="rounded-full w-full p-6 font-normal font-PlusJakartaSans my-2"
                type="submit"
            >
                View All IGs
            </Button>
        </div>
    )
}

const InterestGroupBox = ({ src, children, className, ...props }: { src: string, } &
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => {
    return (
        <div className={`flex flex-col items-center justify-center gap-1 ${className}`} {...props}>
            <div className='w-[60px] h-[60px] bg-primary px-[14px] py-[11px] rounded-full overflow-hidden'>
                <img src={src} alt="" />
            </div>
            <div className='text-sm text-center font-semibold text-[#787878] text-ellipsis truncate w-full'>
                {children}
            </div>
        </div>
    )
}
