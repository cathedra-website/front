export const LecturerPhoto = (props: {src: string}) => {
    return <div style={{
        backgroundImage: `url(${props.src})`,
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        width: '275px',
        height: '388px',
        borderRadius: '12px',
    }}></div>
}